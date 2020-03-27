const router = require('express').Router();
const user = require('../models/user');
const userController = require('../controllers/userController');
const userValidations = require('../validations/userValidation');

//  User routes
router.post('/users/add', userValidations.addUser,userController.addUser);

router.post('/users/signin', userValidations.signIn, userController.signin)

router.post('/users/update', userValidations.updateUser, userController.updateUser);

//  Post Routes

module.exports = router;
