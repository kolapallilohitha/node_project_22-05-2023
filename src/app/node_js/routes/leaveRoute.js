const express = require('express');
const {getLeave, createLeaveRequest } = require('../controllers/LeavesController');
const router = express.Router();

router.route("/").get(getLeave).post(createLeaveRequest);

module.exports = router;