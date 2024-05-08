const commentService=require('../Services/commentService');
exports.getComments=async(req,res)=>{
    try{
        const comment=await commentService.getComment(req.params.id);
       if(!comment){
         res.json("comment not created");
       }
       res.json(comment);
    }
    catch(error){
        res.json({message:error.message});
    }

}
exports.createComment=async(req,res)=>{
    try{
        const comment=await commentService.createComment(req.params.id,req.body,req.user._id);
       if(!comment){
         res.json("comment not created");
       }
       res.json(comment);
    }
    catch(error){
        res.json({message:error.message});
    }

}
exports.deleteComment=async(req,res)=>{
    try{
        const comment=await commentService.deleteComment(req.params.id);
       if(!comment){
         res.json("comment not created");
       }
       res.json(comment);
    }
    catch(error){
        res.json({message:error.message});
    }

}