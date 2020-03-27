const userModel = require('../models/user');
const {
    check,
    validationResult
} = require('express-validator');
const bcrypt = require('bcryptjs');
const saltRounds = 10;
const jwt = require('jsonwebtoken');

//  some helper functions
function hashPassword(password, callback) {
    bcrypt.hash(password, saltRounds, function (err, hash) {
        callback(err, hash);
    })
}

function handleErrorResponse(errors, res, isMessage, message) {
    if (isMessage) {
        res.json({
            success: false,
            message: message
        });
    } else {
        res.json({
            success: false,
            message: errors
        });
    }

}

function matchPasswords(password, hashedPassword) {
    return new Promise((resolve, reject) => {
        bcrypt.compare(password, hashedPassword, function (err, response) {
            if (err) {
                reject(err);
            } else {
                resolve(response);
            }
        });
    })

}

const userController = {
    addUser: function (req, res) {
        const errors = validationResult(req);
        if (errors.length) {
            res.json({
                success: false,
                message: errors
            });
        } else {
            hashPassword(req.body.password, function (hashErr, hashedPassword) {
                if (hashErr) {
                    res.json({
                        success: false,
                        message: 'Something went wrong'
                    });
                } else {
                    const newUserData = {
                        name: req.body.name,
                        password: hashedPassword,
                        email: req.body.email
                    }
                    userModel.addUser(newUserData)
                        .then((response) => {
                            console.log(response);
                            res.json({
                                success: true,
                                message: 'New user added'
                            });
                        })
                        .catch((err) => {
                            console.log(err);
                            res.json({
                                success: false,
                                message: 'Something went wrong'
                            });
                        })
                }
            })
        }
    },


    signin: function (req, res) {
        const errors = validationResult(req);
        if (errors.length) {
            res.json({
                success: false,
                message: errors
            });
        } else {
            const signinData = new userModel({
                email: req.body.email
            })
            signinData.findUser()
                .then((response) => {
                    matchPasswords(req.body.password, response.password)
                        .then((signinResults) => {
                            if(signinResults){
                                const token = jwt.sign({id: response._id}, privateKey, {  expiresIn: '2d' });
                                res.json({success: true, token: token});
                            }else{
                                res.json({success: false, message: 'Authentication failed'});
                            }
                        })
                        .catch((signinErrors) => {
                            console.log(signinErrors);
                            res.json({
                                success: false,
                                message: 'Something went wrong'
                            });
                        })
                })
                .catch((err) => {
                    console.log(err);
                })
        }
    },

    updateUser: function (req, res) {
        const errors = validationResult(req);
        if (errors.length) {
            res.json({
                success: false,
                message: errors
            });
        }else{
            const updateData = {
                userName: req.body.userName,
                phoneNumber: req.body.phoneNumber,
                gender: req.body.gender
            }
            userModel.findByIdAndUpdate(req.id, updateData, function(err, data){
                if(err){
                    console.log(err);
                    res.json({
                        success: false,
                        message: 'Something went wrong'
                    });
                }else{
                    res.json({
                        success: true,
                        message: 'Update successfull'
                    });
                }
            })
        }
    }
}

module.exports = userController;