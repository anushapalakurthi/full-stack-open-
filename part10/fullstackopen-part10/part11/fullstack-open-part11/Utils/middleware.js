const entried = require('./entried')
const requestLogger = (request, response, next) => {
  entried.info('Method:', request.method)
  entried.info('Path:  ', request.path)
  entried.info('Body:  ', request.body)
  entried.info('---')
  next()
}
const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}
const errorHandler = (error, request, response, next) => {
  entried.error(error.message)
  if (error.name === 'CastError' && error.message.includes('ObjectId')) {
    return response.status(400).send({ error: 'malformatted id' })
  } 
  else if (error.name === 'ValidationError') {
    return response.status(400).json({ error: error.message })
  }
  else if (error.name === 'JsonWebTokenError') {
    return response.status(401).json({
      error: 'Token Invalid',
    })
  }
  next(error)
}
const extractToken = (request, response, next) => {
  const authorization = request.get('authorization')
  if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
    request.token = authorization.substring(7)
  } else {
    request.token = null
  }
  next()
  return request.token
}
module.exports = {
  requestLogger,
  unknownEndpoint,
  errorHandler,
  extractToken,
}
