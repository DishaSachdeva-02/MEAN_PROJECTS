const mongoose=require('mongoose');
const playlistSchema=new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'User'
    },
    playlistName:{
        type:String,
        required:true
    },
    songs:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Song'
        }
    ],

})
const playlist=new mongoose.model('playlist',playlistSchema);
module.exports=playlist;