const nodemailer = require('nodemailer');
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')
const speakeasy = require('speakeasy');
const bcrypt = require('bcrypt');
function generateOTP() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}
async function sendPasswordResetOTPEmail(email, otp) {
  let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: 'noreplybeze@gmail.com',
      pass: 'rndqipurrjncriim'
    }
  });
  let mailOptions = {
    from: 'noreplybeze@gmail.com',
    to: email,
    subject: 'Password Reset OTP',
    title: "This OTP is Valid for 5 minutes",
    html: `<div style="background: honeydew; width: 400px; padding-bottom: 35px;">
              <div style="display: flex; padding: 16px 0px;">
                <h2 style="background: white;
                width: 18px;
                height: 18px;
                border-radius: 50%;
                font-size: 12px;
                padding: 5px 7px;
                margin: 7px 9px;"><span style="color:rgb(58, 98, 244);">B</span>e.</h2>
                <h4 style="margin: 6px">Password reset</h4>
              </div>
              <div style="text-align: center;
              width: 250px;
              margin: 0 auto;
              background-color: ghostwhite;
              padding: 20px;">
               <p style="font-size: 13px;
               font-weight: bold;">Someone request that the password be reset for the following account</p>
               <p style="font-size: 11px;">To reset your password,Please enter your OTP</p>
               <button style="background: #4385d4;
               color: #fff;
               border: 1px solid #fff;
               padding: 5px 10px;
               border-radius: 5px;
               width: 130px;">${otp}</button>
               <p style="font-size: 11px;">Your email:<a href="#" style="text-decoration: none;">${email}</a>
               <p style="font-size: 10px;">If this was a mistake, just ignore this email and nothing will happen</p>
              </div>
           </div>`
  };
  await transporter.sendMail(mailOptions);
}

const forgotpassword = asyncHandler(async (req, res) => {
  try {
    const userEmail = req.body.email;
    const Opt = generateOTP();

    if (!userEmail) {
      return res.status(404).send({ error: 'User not found' });
    }
    console.log("user===", User);
    // const secret = speakeasy.generateSecret({ length: 20 });
    // const otp = speakeasy.totp({
    //   secret: secret.base32,
    //   encoding: 'base32',
    //   step: 300, // OTP Valid for 5 minutes
    //   digits: 6
    // });
    // user.passwordResetOTP = {
    //   otp: otp,
    //   secret: secret.base32,
    //   expires: Date.now() + 300000 // OTP Valid for 5 minutes
    // };
    await User.updateOne({ email: userEmail }, { otp: Opt });
    await sendPasswordResetOTPEmail(userEmail, Opt);

    return res.status(200).send({ message: 'Otp send Successfully' });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: 'Server error' });
  }
});

const recoveryPassword = asyncHandler(async (req, res) => {
  try {
    const userEmail = req.body.email;
    const OTP = req.body.otp;
    const newPassword = req.body.password;
    console.log(userEmail, OTP, newPassword);
    const user = await User.findOne({ email: userEmail, otp: OTP });
    if (!user) {
      return res.status(401).json({ message: 'Invalid OTP' });
    }

    // const salt = await bcrypt.genSalt(10);
    // const hashedPassword = await bcrypt.hash(newPassword, user.password);
    // console.log("hashedPassword====", hashedPassword);
    // if (!hashedPassword) {
    //   return res.status(401).json({ message: 'failed' });
    // }
    await user.updateOne({ email: userEmail }, { password: newPassword, otp: null });
    
    res.status(200).json({ message: 'Password updated successfully',  user});
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }


});

module.exports = { forgotpassword, recoveryPassword };
