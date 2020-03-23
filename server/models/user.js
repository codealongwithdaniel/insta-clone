const mongoose = require('mongoose');
const Keys = require('../config/keys');

const Schema = mongoose.Schema;
const UserSchema = new Schema({
    name: String,
    userName: String,
    website: String,
    bio: String,
    email: String,
    phoneNumber: Number,
    gender: String,
    password: String,
    photo: String,
    posts:[
        {
            type: Schema.Types.ObjectId,
            ref: 'Post'
        }
    ],
    followers:[
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    ],
    following:[
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    ]
    
});

UserSchema.statics.addUser = function(data){
    const newUser = new this(data);
    console.log('New user ', data)
    return new Promise((resolve, reject)=>{
        newUser.save()
        .then((user)=>{
            // console.log(user);
            resolve(user);
        })
        .catch((err)=>{
            console.log(err);
            throw err;
            reject(err);
        })
    })
}

UserSchema.methods.findUser = function(){
    return new Promise((resolve, reject)=>{
        // console.log(data);
        this.model('User').findOne((err, result)=>{
            console.log(result);
            if(err){
                reject(err);
            }else{
                resolve(result);
            }
        })
    })
}

const User = mongoose.model('User',UserSchema);



module.exports = User;