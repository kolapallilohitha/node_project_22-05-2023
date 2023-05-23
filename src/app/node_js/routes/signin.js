const express = require('express')
const router = express.Router();
const { userLogin } = require("../controllers/signinController")
router.route('/')
    .post(userLogin);
module.exports = router
