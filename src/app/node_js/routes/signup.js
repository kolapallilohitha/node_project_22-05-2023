const express = require('express')
const router = express.Router();
const { getUser } = require("../controllers/signupController")
router.route('/')
    .post(getUser)

module.exports = router
