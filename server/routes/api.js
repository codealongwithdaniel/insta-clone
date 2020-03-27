const router = require('express').Router();
const multer = require('multer');

// Config keys
const keys = require('../config/keys');
//  All modals
const user = require('../models/user');

//  All controllers
const userController = require('../controllers/userController');
const postController = require('../controllers/postController');

//  All Validations
const userValidations = require('../validations/userValidation');
const postValidations = require('../validations/postValidation');

//  Multer config
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/'+keys.uploadFolder);
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now()+file.originalname);
    }
})

const fileFilter = function(req,file,callback){
    if(file.mimetype == 'image/jpeg' || file.mimetype == 'image/png' || file.mimetype == 'image/jpg'){
        callback(null, true);
    }else{
        callback(null,false);
    }
}
var upload = multer({ storage: storage});


//  User routes
router.post('/users/add', userValidations.addUser,userController.addUser);

router.post('/users/signin', userValidations.signIn, userController.signin)

router.post('/users/update', userValidations.updateUser, userController.updateUser);

//  Post Routes
router.post('/posts/add', [upload.array('photos', 10)], postController.addPost);
module.exports = router;
