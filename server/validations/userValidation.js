const { check, validationResult } = require('express-validator');

const userValidations = {
    addUser:[
        check('name').notEmpty().isLength({ min: 2 }).withMessage('Name should be more than 2 letters'),
        check('password').notEmpty().isLength({ min: 5 }).withMessage('Password should be more than 5 letters'),
        check('email').notEmpty().withMessage('Email is required').isEmail().withMessage('Enter a valid email')
    ],
    signIn:[
        check('email').notEmpty().withMessage('Email is required').isEmail().withMessage('Enter a valid email'),
        check('password').notEmpty().isLength({ min: 5 }).withMessage('Password should be more than 5 letters'),
    ],
    updateUser:[
        check('userName').notEmpty().isLength({min: 2}).withMessage('Enter a valid user name').matches('^(?![0-9._])(?!.*[0-9._]$)(?!.*\d_)(?!.*_\d)[a-zA-Z0-9_]+$', 'i'),
        check('phoneNumber').optional().isNumeric().isLength({max: 10}).withMessage('Enter a valid mobile number'),
        check('gender').notEmpty().isLength({min : 4}).withMessage("This field is required")
    ]
}

module.exports = userValidations;