const postModel = require('../models/post');
const userModel = require('../models/user');
const commentModel = require('../models/comment');
const {
    check,
    validationResult
} = require('express-validator');

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
                const newComment = {
                    comment: req.body.comment,
                    user: user
                }
                postModel.findById(req.params.id, function(err, post){
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