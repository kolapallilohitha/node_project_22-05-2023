const asyncHandler = require('express-async-handler')
const users = require("../models/userModel")
const bcrypt = require('bcrypt');
const getUser = asyncHandler(async (req, res) => {
    const { firstname,lastname, phone, email, password, role, avatar } = req.body;
    console.log(req.body)
    if (!firstname  || !lastname || !phone || !email || !password ) {
        return res.status(400).json({ message: 'firstname, email, phone, role and password are required' });
      }
      try {
        const hashedPassword = await bcrypt.hash(password, 10);
    
        const user = new users({ firstname, lastname, email, phone, role, avatar, password: hashedPassword });
        await user.save();
    
        res.status(201).json({ message: 'User created' });
      } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal server error' });
      }
})

module.exports = { getUser }
