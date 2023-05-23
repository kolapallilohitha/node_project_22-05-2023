const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
  email: { type: String, required: true },
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  empId: {type: String},
  designation: {type: String},
  phone: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  zipcode: { type: String, required: true },
  image: { type: String},
  department: { type: String, 
    // enum:['IT', 'Sales', 'Product Development']
  },
  team: {type: String}, 
  role: {type: String},
  joiningDate: {type: String}, 
  teams: [{
    type: String,
    // enum: ['UI/UX', 'IT', 'Development']
  }],
  // education: [{
  //   ssc:{
  //     schoolname: {
  //       type: String
  //     },
  //     location: {
  //       type: String
  //     },
  //     percentage: {
  //       type: String
  //     }
  //   },
  //   inter:{
  //     collagename: {
  //       type: String
  //     },
  //     location: {
  //       type: String
  //     },
  //     percentage: {
  //       type: String
  //     }
  //   },
  //   graduation: {
  //     univercityname: {
  //       type: String
  //     },
  //     location: {
  //       type: String
  //     },
  //     percentage: {
  //       type: String
  //     }
  //   }
  // }],
  dob: {
    type: String
  },
  gender: {
    type: String
  },
  address1: {
    type: String
  },
  address2: {
    type: String
  }
});

const Profile = mongoose.model('Profile', profileSchema);

module.exports = Profile;