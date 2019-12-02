require('dotenv').config()

const express = require('express')
const router  = express.Router()

const Employee = require('../models/Employee.model')
const redis_client = require('../configs/redis.config')


// call from client
router.get('/', (req,res,next) => {

  redis_client.get(process.env.REDIS_ID_KEY, (err, data) => {
    if(err) {
      res.status(500). send(err)
    }
    if(data != null) {
      res.json(JSON.parse(data))
    }
    else {
    // this code block should be changed for the one bellow module.exports in case the given DB returns usefull data  
      Employee.find()
      .then(all => res.json(all))
      .catch(err => res.status(500).json({message: 'Error getting data directly from DB and not from redis'}))
    }
  })
})



module.exports = router

// fetch(`${process.env.COMPANY_DB_ENDPOINT}`)
// .then(res => {
//   redis_client.setex(process.env.REDIS_ID_KEY, 86400, JSON.stringify(res))
// })
// .catch(err => res.status(500).json({message: 'Error getting data directly from DB and not from redis'}))