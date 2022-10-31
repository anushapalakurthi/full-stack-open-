import axios from 'axios'
const urlBase = '/api/login'
const login = async (credentials) => 
{
  const outcome = await axios.post(urlBase, credentials)
  return outcome.data
}
export default { login }
