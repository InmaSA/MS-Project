require('dotenv').config()

const express = require('express')
const router  = express.Router()
const cron = require ('node-cron')

const Employee = require('../models/Employee.model')
const redis_client = require('../configs/redis.config')


// Get data from DB at setted hour and save cache with redis
const task = cron.schedule('30 0 * * *', () => {
  router.get('/', (req,res,next) => {
    Employee.find()
    .then(all => {
      redis_client.setex(process.env.REDIS_ID_KEY, 86400, all)
      res.json(all)
    })
    .catch(err => res.status(500).json({message: 'Error cacheando la info'}))
  })
},
{
  schedule: true,
  timezone: 'Europe/Madrid'
})

task.start()


module.exports = router


