require('dotenv').config()
require('./configs/mongoose.config')

const bodyParser   = require('body-parser')
const cookieParser = require('cookie-parser')
const express      = require('express')

const logger       = require('morgan')
const path         = require('path')


const app_name = require('./package.json').name
const debug = require('debug')(`${app_name}:${path.basename(__filename).split('.')[0]}`)

const app = express()

// Middleware Setup
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())



// default value for title local
app.locals.title = 'MS-Project'



app.use('/', require('./routes/index.routes'))
app.use('/api', require('./routes/employees.routes'))

module.exports = app
