import axios from 'axios'
const baseUrl = '/api/blogs'
let token = null
const setToken = (newToken) => 
{
  token = `bearer ${newToken}`
}
const getAll = async () =>
{
  const response = await axios.get(baseUrl)
  return response.data
}
const creation = async (newObject) => 
{
  const config = {
    headers: { Authorization: token },
  }
  const response = await axios.post(baseUrl, newObject, config)
  return response.data
}
const update = async (id, newObject) => 
{
  const response = await axios.put(`${baseUrl}/${id}`, newObject)
  return response.data
}
const blogDeletion = async (id) => 
{
  const config = {
    headers: { Authorization: token },
  }
  const response = await axios.delete(`${baseUrl}/${id}`, config)
  return response.data
}
export default { getAll, creation, update, blogDeletion, setToken }
