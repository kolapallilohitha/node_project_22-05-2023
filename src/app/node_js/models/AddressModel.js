const mongoose = require('mongoose')
const user = require('./userModel')
const addressModel = mongoose.Schema({
    // user: user._id,
    street: {
        type: String,
        required: true
    },
    addressline1: {
        type: String,
        required: true
    },
    addressline2: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    zipcode: {
        type: String,
        required: true
    }
})


module.exports = mongoose.model("address", addressModel)
