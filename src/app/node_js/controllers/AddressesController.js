const asyncHandler = require('express-async-handler')
const userModel = require('../models/userModel')
const bcrypt = require('bcrypt');
const { async } = require('rxjs/internal/scheduler/async');

const getAddress = asyncHandler(async (req, res) => {
    try {
        const { userId } = req.params;
        const { address } = req.body;

        // Check if the user with the given ID exists
        const user = await userModel.findOne({ userId });
        if (!user) {
            return res.status(404).send({ message: 'User not found' });
        }

        // Update the user's address
        user.address = address;
        await user.save();

        return res.status(200).send({ message: 'Address saved successfully' });
    } catch (err) {
        console.error(err);
        return res.status(500).send({ message: 'Internal server error' });
    }
});

module.exports = { getAddress }