const mongoose = require('mongoose')
const address = require("./AddressModel")
const userSchema = mongoose.Schema(
    {
        firstname: {
            type: String,
            // required: [true, "Please enter name"]
        },
        lastname: {
            type: String,
            // required: [true, "Please enter name"]
        },
        phone: {
            type: String,
        },
        email: {
            type: String,
            required: [true, "Please enter email"]
        },
        password: {
            type: String,
            required: [true, "Please enter password"]
        },
        createdAt: {
          type: Date,
          default: Date.now()
        },
        token: {
          type: String,
        },
        avatar: {
            type: String,
        },
        role:{
            type: String,
            enum: ['user', 'admin', 'superadmin'],
            default: 'user'
        },
       
    },
    {
        timeStamps: true
    }
)

module.exports = mongoose.model('Users', userSchema);

// module.exports = mongoose.model('Profile', profileDetails);