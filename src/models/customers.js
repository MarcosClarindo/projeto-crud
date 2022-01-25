const mongoose = require('mongoose')

// criando o Schema (colection)
const schema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String,
    password: String,
})
 const Model = mongoose.model('customer', schema)

 module.exports = Model

