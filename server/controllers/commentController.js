const postModel = require('../models/post');
const userModel = require('../models/user');
const commentModel = require('../models/comment');
const {
    check,
    validationResult
} = require('express-validator');
var ObjectId = require('mongodb').ObjectID;

const commentController = {
    addComment: function(req, res){
        const errors = validationResult(req);
        if (errors.length) {
            res.json({
                success: false,
                message: errors
            });
        }else{
            userModel.findById(req.user.id, function(err, user){
                if(err){
                    res.json({
                        success: false,
                        message: 'Something went wrong'
                    });
                }
                const newComment = new commentModel({
                    comment: req.body.comment,
                    user: user
                })
                // console.log('post id', req.body.postId)
                postModel.findById(req.body.postId, function(err, post){
                    // console.log(post)
                    if(err){
                        res.json({
                            success: false,
                            message: 'Something went wrong'
                        });
                    }else{
                        post.comments.push(newComment);
                        post.save();
                        newComment.save();
                        res.json({
                            success: true,
                            message: 'New comment added'
                        });
                    }
                })
            })
        }
    }
}

module.exports = commentController;