const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    title: String,
    post: String,
    location: String,
    comments:[
        {
            type:Schema.Types.ObjectId,
            ref:'Comment'
        }
    ],
    photos: [String],
    hashtags: [String]
});

const Post = mongoose.model('Post',PostSchema);

module.exports = Post;