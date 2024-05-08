const mongoose = require('mongoose');
const commentSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User' 
    },
    application: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Application' 
    },
    commentStatement: {
        type: String,
        required: true,
       
    },
    rating: {
        type: Number,
        required: true,
        min: 0,
        max: 5
    }
}, {
    
    timestamps: true
});              
const Comment = mongoose.model('Comment', commentSchema);
module.exports = Comment;


