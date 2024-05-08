const downloadService=require('../Services/downloadService')
exports.getdownloads=async(req,res)=>{
    try{
        const download=await downloadService.getDownloads(req.user._id);
       if(!download){
         res.json("download not found");
       }
       res.json(download);
    }
    catch(error){
        res.json({message:error.message});
    }

}
exports.addtodownloads=async(req,res)=>{
    try{
        const download=await downloadService.addtoDownloads(req.user._id,req.params.id);
       if(!download){
         res.json("download not found");
       }
       res.json(download);
    }
    catch(error){
        res.json({message:error.message});
    }

}
exports.removefromdownloads=async(req,res)=>{
    try{
        const download=await downloadService.removefromDownloads(req.user._id,req.params.id);
       if(!download){
         res.json("download not found");
       }
       res.json(download);
    }
    catch(error){
        res.json({message:error.message});
    }

}