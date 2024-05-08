const mongoose=require('mongoose');
const songSchema=new mongoose.Schema({

    songName:{
        type:String,
        required:true
    },
    singer:{
        type:String,
        required:true
    },
    musicDirector:{
        type:String,
        required:true
    },
    releaseDate:{
        type:Date,
        required:true
    },
    visibility:{
        type:Boolean,
        default:true
    }
})
const Song=new mongoose.model('Song',songSchema);
module.exports=Song;