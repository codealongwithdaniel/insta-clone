const router = require('express').Router();
const multer = require('multer');

// Config keys
const keys = require('../config/keys');
//  All modals
const user = require('../models/user');

//  All controllers
const userController = require('../controllers/userController');
const postController = require('../controllers/postController');
const commentController = require('../controllers/commentController');

//  All Validations
const userValidations = require('../validations/userValidation');
const postValidations = require('../validations/postValidation');
const commentValidations = require('../validations/commentValidation');

const auth = require('../config/authConfig');
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
router.post('/posts/add', [postValidations.addPost, upload.array('photos', 10), auth], postController.addPost);

router.get('/posts/getUserPosts', auth,postController.getAllPostsWithUserId);

//  Comment Routes
router.post('/comments/add',[auth, commentValidations.addComment], commentController.addComment);

module.exports = router;