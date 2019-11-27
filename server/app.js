require('dotenv').config()
require('./configs/mongoose.config')
require('./configs/redis.config')
const cors          = require('cors')

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

// CORS middleware

const whitelist = ['http://localhost:3000']
const corsOptions = {
  origin: (origin, cb) => {
    const originIsWhitelisted = whitelist.includes(origin)
    cb(null, originIsWhitelisted)
  },
  credentials: true
}
app.use(cors(corsOptions))


// default value for title local
app.locals.title = 'MS-Project'



app.use('/', require('./routes/index.routes'))
app.use('/api', require('./routes/employees.routes'))

module.exports = app
