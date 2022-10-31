const express = require('express');
const { getAsync, setAsync } = require('../redis')
const { Todo } = require('../mongo')
const router = express.Router();
const countTodo = async () => {
  const count = await getAsync("count")
  return count ? setAsync("count", parseInt(count) + 1) : setAsync("count", 1)
}
router.get('/', async (_, res) => {
  try{
    const todos = await Todo.find({})
    res.send(todos);
  }catch(exception){
    console.log(exception)
  }
});
router.get('/statistics', async (_ , res) => {
  const count = await getAsync("count")
  return res.json({"added_todos" : count || "0"})
})
router.post('/', async (req, res) => {
  countTodo()
  const todo = await Todo.create({
    text: req.body.text,
    done: false
  })
  res.send(todo);
});

const singleRouter = express.Router();
const findByIdMiddleware = async (req, res, next) => {
  const { id } = req.params
  req.todo = await Todo.findById(id)
  if (!req.todo) return res.sendStatus(404)
  next()
}
singleRouter.delete('/', async (req, res) => {
  await req.todo.delete()  
  res.sendStatus(200);
});
singleRouter.get('/', async (req, res) => {
  const todo = req.todo
  if(todo){
    return res.json(todo)
  }
  res.sendStatus(405); 
});
singleRouter.put('/', async (req, res) => {
  const todo = req.body
  console.log(todo)
  const newTodo = await Todo.insertOne(todo)
  if(!newTodo)
    return res.status(401).json(newTodo)
  res.sendStatus(405); 
});
router.use('/:id', findByIdMiddleware, singleRouter)
module.exports = router;
