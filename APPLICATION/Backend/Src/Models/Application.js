const mongoose=require('mongoose');
const applicationSchema=new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'User'
    },
    appName:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    releaseDate:{
        type:Date,
         required:true
    },
    version:{
        type:String,
        default:"1.0"
    },
    genre:{
        type:String,
        required:true,
        enum:['Games','Beauty','Fashion','Women','Health']
    },
     visibility:{
        type:Boolean,
        default:true
     },
     downloadCount:{
        type:Number,
        default:0,
     },
    
},{
    timestamps:true,
    toJSON: {virtuals: true},
    toObject:{ virtuals: true}
})
applicationSchema.virtual('comments', {
    'ref': 'Comment',
    localField: '_id',
    foreignField: 'application',
});
applicationSchema.virtual('averageRating').get(function() {
    const comments = this.comments;
    if (!comments || comments.length === 0) return 0;
    const totalRatings = comments.length;
    const totalSum = comments.reduce((sum, comment) => sum + comment.rating, 0);
    return totalSum / totalRatings;
});
applicationSchema.methods.incrementDownloadCount = function() {
    this.downloadCount++;
    return this.save();
};
applicationSchema.methods.decrementDownloadCount = function() {
    this.downloadCount--;
    return this.save();
};

const Application=new mongoose.model('Application',applicationSchema);
module.exports=Application;