const express = require('express')
const router  = express.Router()

const Employee = require('../models/Employee.model')

router.get('/', (req,res,next) => {
  Employee.find()
  .then(all => res.json(all))
  .catch(err => res.status(500).json({message: 'Error obteniendo la lista'}))
})

module.exports = router