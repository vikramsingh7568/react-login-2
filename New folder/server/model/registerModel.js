const mongoose = require('mongoose');

const RegistrationSchema = new mongoose.Schema({
    firstName : String,
    lastName : String,
    email: String,
    phone: Number,
    password: String
})

module.exports =mongoose.model("RegistrationForm",RegistrationSchema)



