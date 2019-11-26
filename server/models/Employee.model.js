const mongoose = require ('mongoose')
const Schema = mongoose.Schema

const employeeSchema = new Schema ({
  name : {type: String, required: true},
  image: {type: String, required: true},
  age: {type: Number, required: true},
  bio: {type: String, require: true}
}, {timestamps: true})

const Employee = mongoose.model('Employee', employeeSchema)
module.exports = Employee
