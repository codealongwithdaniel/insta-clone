const { check, validationResult } = require('express-validator');

const commentValidation = {
    addComment: [
        check('comment').notEmpty().withMessage('Comment is required')
    ],
    updateComment:[
        check('comment').notEmpty().withMessage('Comment is required')
    ]
}

module.exports = commentValidation;