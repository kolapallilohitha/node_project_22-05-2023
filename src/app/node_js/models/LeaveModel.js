const { Module } = require('module');
const mongose = require('mongoose');
const leavePolicy = mongose.Schema({
    employeename: {
        type: String,
        required: [true, "Please Enter Employee Name"]
    },
    leavestatus: {
        type: String,
        required: [true, "Please Enter Employee Name"]
    },
    leavetype: {
        type: String,
        required: [true, "Please Enter Employee Name"]
    },
    fromdate: {
        type: String,
        required: [true, "Please Enter Employee Name"]
    },
    todata: {
        type: String,
        required: [true, "Please Enter Employee Name"]
    },
    reason: {
        type: String,
        required: [true, "Please Enter Employee Name"]
    },
    reportingmanager: {
        type: String,
        required: true
    }
});
module.exports = mongose.model("leavePolicy", leavePolicy);