require('dotenv').config()
const fetch   = require('node-fetch')

const express = require('express')
const router  = express.Router()
const cron = require ('node-cron')

const Employee = require('../models/Employee.model')
const redis_client = require('../configs/redis.config')


// Get data from DB at setted hour and save cache with redis

const task = cron.schedule('30 00 * * *', () => {
    fetch(`${process.env.COMPANY_DB_ENDPOINT}`)
    .then(res => {
      redis_client.setex(process.env.REDIS_ID_KEY, 86400, JSON.stringify(res))
    })
    .catch(err => {
      Employee.find()
      .then(all => {
        redis_client.setex(process.env.REDIS_ID_KEY, 86400, JSON.stringify(all))
      })
      .catch(err => res.status(500).json({message: 'error getting data from DB and saving cache in redis'}))
  })
},
{
  schedule: true,
  timezone: 'Europe/Madrid'
})

task.start()


module.exports = router


