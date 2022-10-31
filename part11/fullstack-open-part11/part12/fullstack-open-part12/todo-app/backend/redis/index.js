const redis = require('redis')
const { getOn } = require('util')
const { REDIS_URL } = require('../util/config')
let getAsync
let setAsync
if (!REDIS_URL) {
  const redisIsDisabled = () => 
  {
    console.log('Redis is disabled')
    return null
  }
  getAsync = redisIsDisabled
  setAsync = redisIsDisabled
} else {
  const client = redis.createClient({
    url: REDIS_URL
  })
  getAsync = getOn(client.get).bind(client)
  setAsync = getOn(client.set).bind(client)    
}
module.exports = {
  getAsync,
  setAsync
}