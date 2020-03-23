const userModel = require('../models/user');
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const saltRounds = 10;

//  some helper functions
function hashPassword (password, callback){
    bcrypt.hash(password, saltRounds, function(err, hash){
        callback(err, hash);
    })
}

function handleErrorResponse(errors, res, isMessage, message){
    if(isMessage){
        res.json({success: false, message: message});
    }else{
        res.json({success: false, message: errors});
    }
    
}


const userController = {
    addUser: function(req, res){
        const errors = validationResult(req);
        if(errors.length){
            res.json({success: false, message: errors});
        }else{
            hashPassword(req.body.password, function(hashErr, hashedPassword){
                if(hashErr){
                    res.json({success: false, message: 'Something went wrong'});
                }else{
                    const newUserData = {
                        name:req.body.name,
                        password: hashedPassword,
                        email: req.body.email
                    }
                    userModel.addUser(newUserData)
                    .then((response)=>{
                        console.log(response);
                        res.json({success: true, message: 'New user added'});
                    })
                    .catch((err)=>{
                        console.log(err);
                        res.json({success: false, message: 'Something went wrong'});
                    })
                }
            })
        }
    },


    signin: function(req, res){
        if(errors.length){
            res.json({success: false, message: errors});
        }else{
            
        }
    },

    updateUser: function(req, res){

    }
}

module.exports = userController;