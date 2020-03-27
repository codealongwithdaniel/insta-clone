const postModel = require('../models/post');
const userModel = require('../models/user');
const {
    check,
    validationResult
} = require('express-validator');
const multer = require('multer');
const keys = require('../config/keys');

function returnFileUrlName(file){
    return keys.uploadFolder+file.filename;
}

const postController = {
    addPost: function(req, res){
        const errors = validationResult(req);
        if (errors.length) {
            res.json({
                success: false,
                message: errors
            });
        }else{
            const newPost = new postModel({
                title: req.body.title,
                post: req.body.post,
                hashtags: req.body.hashtags,
                photos: _.map(req.files, returnFileUrlName)
            });

            userModel.findById(req.user.id, function(err, user){
                if(err){
                    console.log(err);
                    res.json({
                        success: false,
                        message: 'Something went wrong'
                    });
                }else{
                    user.posts.push(newPost);
                    user.save();
                    newPost.save();
                    res.json({
                        success: true,
                        message: 'New post added'
                    });
                }
            })

        }
    },

    getPostWithId: function(req, res){
        postModel.findById(req.params.id, function(err, post){
            if(err){
                res.json({
                    success: false,
                    message: 'Something went wrong'
                });
            }else{
                res.json({
                    success: true,
                    results: post
                });
            }
        })
    }
}

module.exports = postController;