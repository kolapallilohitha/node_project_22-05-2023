const mongoose = require('mongoose');
const express = require('express');
const app = express();
const vm = require("v-response");
const port = process.env.PORT ||8000;
exports.connectDb = async () => {
    const database = 'mongodb://localhost:27017/test';

    mongoose.connect((database), {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    })
        .then(async () => {
            vm.log("connected to database", database);
        })
        .catch(err => vm.log("error mongodb", err));


    app.listen(port, () => vm.log("server running on port:", port));
}