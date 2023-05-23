const express = require('express');
const { errorHandler } = require('./middlewares/errorHandler');
const { connectDb } = require('./config/dbConnection');
const cors = require('cors');
require('dotenv').config();
const swaggerDocs = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const contactsRouter = require('./routes/contacts');
const signupRouter = require("./routes/signup");
const signinRouter = require("./routes/signin");
const profileDetails = require("./routes/changeprofile");
const forgot = require("./routes/forgot");
const changePassword = require("./routes/changePasswordRoute");
const leaveRequest = require("./routes/leaveRoute");
const otp = require("./routes/Twilio");
const zoom = require("./routes/ZoomRouter");
const morgan = require('morgan');
const app = express();
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: "HRMS Project API Documenation",
            version: '1.0.0',
        },
        servers:[ {
            url: "http://localhost:8081/"
        }],
        paths: {
            '/api/signup' : {
                post : {
                    tags: ["Signup"],
                    discription: "User Signup",
                    requestBody: {
                        content: {
                           "applicatin/json": {
                              schema: {
                                type: "object",
                                properties: {
                                    firstname:{
                                       type: String,
                                       discription: "First name of the user",
                                       example: "Rambabu"
                                    }
                                }
                              }
                           }
                        },
                        200: {
                            discription: "ok"
                        }
                    }
                }
            },
            '/api/signin' : {
                post : {
                    tags: ["Signin"],
                    discription: "User Signin",
                    requestBody: {
                        content: {
                           "applicatin/json": {
                              schema: {
                                type: "object",
                                properties: {
                                    email:{
                                       type: String,
                                       discription: "enter your email",
                                       example: "vrambabu043@gmail.com"
                                    },
                                    password:{
                                        type: String,
                                        discription: "enter your Password",
                                        example: "XXXXXX"
                                     }
                                }
                              }
                           }
                        },
                        200: {
                            discription: "ok"
                        }
                    }
                }
            },
            '/api/forgot-password' : {
                post : {
                    tags: ["Forgot Password"],
                    discription: "Forgot Password",
                    requestBody: {
                        content: {
                           "applicatin/json": {
                              schema: {
                                type: "object",
                                properties: {
                                    email:{
                                       type: String,
                                       discription: "enter your email",
                                       example: "vrambabu043@gmail.com"
                                    }
                                }
                              }
                           }
                        },
                        200: {
                            discription: "ok"
                        }
                    }
                }
            },
            '/api/reset-password' : {
                post : {
                    tags: ["Forgot Password"],
                    discription: "Forgot Password",
                    requestBody: {
                        content: {
                           "applicatin/json": {
                              schema: {
                                type: "object",
                                properties: {
                                    otp:{
                                       type: String,
                                       discription: "enter your otp",
                                       example: "XXXXX"
                                    },
                                    newPassword:{
                                        type: String,
                                        discription: "enter your new password",
                                        example: "XXXXXXX"
                                     }
                                }
                              }
                           }
                        },
                        200: {
                            discription: "ok"
                        }
                    }
                }
            },
            '/api/change-password' : {
                put : {
                    tags: ["Forgot Password"],
                    discription: "Forgot Password",
                    requestBody: {
                        content: {
                           "applicatin/json": {
                              schema: {
                                type: "object",
                                properties: {
                                    oldPassword:{
                                       type: String,
                                       discription: "enter your Old Password",
                                       example: "XXXXX"
                                    },
                                    newPassword:{

                                        type: String,
                                        discription: "enter your new password",
                                        example: "XXXXXXX"
                                     }
                                }
                              }
                           }
                        },
                        200: {
                            discription: "ok"
                        }
                    }
                }
            },
            '/api/profile' : {
                get : {
                    tags: ["User Profile"],
                    discription: "List of all users list",
                    200: {
                       discription: "ok"
                    }
                },
                post : {
                    tags: ["User Profile"],
                    discription: "Create User Profile",
                    requestBody: {
                        content: {
                           "applicatin/json": {
                              schema: {
                                type: "object",
                                properties: {
                                    firstname:{
                                       type: String,
                                       discription: "enter your email",
                                       example: "Rambabu"
                                    },
                                    lastname:{
                                        type: String,
                                        discription: "enter your Password",
                                        example: "Viyyapu"
                                     },
                                    city:{
                                        type: String,
                                        discription: "enter your email",
                                        example: "Hitech City"
                                    },
                                    zipcode:{
                                         type: String,
                                         discription: "enter your Password",
                                         example: "500081"
                                    },
                                    state:{
                                        type: String,
                                        discription: "enter your email",
                                        example: "Telangana"
                                    },
                                    phone:{
                                         type: String,
                                         discription: "enter your Password",
                                         example: "8897331506"
                                    },
                                   
                                }
                              }
                           }
                        },
                        200: {
                            discription: "ok"
                        }
                    }
                },
            },
            '/api/profile/{id}': {
                get : {
                    tags: ["User Profile"],
                    discription: "Get details by id",
                    200: {
                      discription: "User Details Getting Successfully"
                    }
                },
                put : {
                    tags: ["User Profile"],
                    discription: "Delete profile by id",
                    requestBody: {
                        content: {
                           "applicatin/json": {
                              schema: {
                                type: "object",
                                properties: {
                                    firstname:{
                                        type: String,
                                        discription: "enter your email",
                                        example: "Rambabu"
                                     },
                                     lastname:{
                                         type: String,
                                         discription: "enter your Password",
                                         example: "Viyyapu"
                                      },
                                     city:{
                                         type: String,
                                         discription: "enter your email",
                                         example: "Hitech City"
                                     },
                                     zipcode:{
                                          type: String,
                                          discription: "enter your Password",
                                          example: "500081"
                                     },
                                     state:{
                                         type: String,
                                         discription: "enter your email",
                                         example: "Telangana"
                                     },
                                     phone:{
                                          type: String,
                                          discription: "enter your Password",
                                          example: "8897331506"
                                     },
                                }
                              }
                           }
                        },
                        200: {
                            discription: "User Profile Deleted Successfully"
                        }
                    }
                },
                delete : {
                    tags: ["User Profile"],
                    discription: "Delete profile by id",
                    200: {
                        discription: "User Profile updated Successfully"
                    }
                },
            },
            '/api/leave-request': {
                get : {
                    tags: ["Leave Request"],
                    discription: "List Of All Leave Requests",
                    200: {
                       discription: "User Profile Deleted Successfully"
                    }
                },
                post : {
                    tags: ["Leave Request"],
                    discription: "List Of All Leave Requests",
                    requestBody: {
                        content: {
                           "applicatin/json": {
                              schema: {
                                type: "object",
                                properties: {
                                    employeename:{
                                        type: String,
                                        discription: "enter your email",
                                        example: "Rambabu"
                                     },
                                     leavestatus:{
                                         type: String,
                                         discription: "enter your Password",
                                         example: "Pending"
                                      },
                                      leavetype:{
                                         type: String,
                                         discription: "enter your email",
                                         example: "Sick Leave"
                                     },
                                     fromdate:{
                                          type: String,
                                          discription: "enter your Password",
                                          example: "12/11/2022"
                                     },
                                     todata:{
                                         type: String,
                                         discription: "enter your email",
                                         example: "20/12/2022"
                                     },
                                     reason:{
                                          type: String,
                                          discription: "enter your reason",
                                          example: "Going to home"
                                     },
                                }
                              }
                           }
                        },
                        200: {
                            discription: "User Profile Deleted Successfully"
                        }
                    }
                },
            },
            '/api/leave-request/{id}': {
                // get : {
                //     tags: ["Leave Request"],
                //     discription: "Get Leave Request by id",
                //     parameters: {

                //     },
                //     200: {
                //        discription: "Leave Request Getting Successfully"
                //     }
                // },
                put : {
                    tags: ["Leave Request"],
                    discription: "Create Leave Request",
                    requestBody: {
                        content: {
                           "applicatin/json": {
                              schema: {
                                type: "object",
                                properties: {
                                    employeename:{
                                        type: String,
                                        discription: "enter your email",
                                        example: "Rambabu"
                                     },
                                     leavestatus:{
                                         type: String,
                                         discription: "enter your Password",
                                         example: "Pending"
                                      },
                                      leavetype:{
                                         type: String,
                                         discription: "enter your email",
                                         example: "Sick Leave"
                                     },
                                     fromdate:{
                                          type: String,
                                          discription: "enter your Password",
                                          example: "12/11/2022"
                                     },
                                     todata:{
                                         type: String,
                                         discription: "enter your email",
                                         example: "20/12/2022"
                                     },
                                     reason:{
                                          type: String,
                                          discription: "enter your reason",
                                          example: "Going to home"
                                     },
                                }
                              }
                           }
                        },
                        200: {
                            discription: "Leave Request Updated Successfully"
                        }
                    }
                },
                delete : {
                    tags: ["Leave Request"],
                    discription: "Delete leave request by id",
                    200: {
                        discription: "Leave Request Deleted Successfully"
                    }
                },
            },
        },
    },
    
    apis: ['./mongodb.js']
};
const swager = swaggerDocs(options);
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swager));

app.use(errorHandler);

app.get('/', (req, res)=>{
    res.status(200).send('Welcome')
});
app.use('/api', forgot);
app.use('/api/contacts', contactsRouter);
app.use('/api/signup', signupRouter);
app.use('/api/signin', signinRouter);
app.use('/api/profile',  profileDetails);
app.use('/api/change-password', changePassword);
app.use('/api/leave-request', leaveRequest);
app.use('/api/sendotp', otp);
app.use('/api/zoom', zoom);

connectDb();