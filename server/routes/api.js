const router = require('express').Router();
const user = require('../models/user');
const userController = require('../controllers/userController');
const userValidations = require('../validations/userValidation');


router.post('/users/add', userValidations.addUser,userController.addUser);

router.post('/users/signin', userValidations.signIn, userController.signin)
module.exports = router;