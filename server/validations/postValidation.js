const { check, validationResult } = require('express-validator');

const postValidation = {
    addPost:[
        check('title').notEmpty().isLength({ min: 5 }).withMessage('Title should be more than 5 letters'),
        check('post').optional(),
        check('location').optional(),
        check('hashtags').isArray({min: 2}).withMessage('Add Atleast 2 hastags')
    ],

    updatePost:[
        check('title').notEmpty().isLength({ min: 5 }).withMessage('Title should be more than 5 letters'),
        check('post').optional(),
        check('location').optional(),
        check('hashtags').isArray({min: 2}).withMessage('Add Atleast 2 hastags')
    ]
}

module.exports = postValidation;