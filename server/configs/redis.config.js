const redis = require('redis')
const redis_client = redis.createClient()

redis_client.on('connect', () => (console.log('Redis client connected')))  
redis_client.on('error', (err) => (console.log('Error connecting redis client: ', err)))


module.exports = redis_client