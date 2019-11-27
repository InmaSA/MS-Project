require('dotenv').config()

const express = require('express')
const router  = express.Router()

const Employee = require('../models/Employee.model')
const redis_client = require('../configs/redis.config')


// call from client
router.get('/', (req,res,next) => {

  // redis_client.get(process.env.REDIS_ID_KEY, (err, data) => {
  //   if(err) {
  //     res.status(500). send(err)
  //   }
  //   if(data != null) {
  //     res.json(data)
  //   }
  //   else {
      Employee.find()
      .then(all => res.json(all))
      .catch(err => res.status(500).json({message: 'Error obteniendo la lista'}))
  //   }
  // })
})



module.exports = router