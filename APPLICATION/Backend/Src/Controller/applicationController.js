const applicationService=require('../Services/applicationservice')
exports.getAllApplications=async(req,res)=>{
    try{
        const application=await applicationService.getAllApplications(req.query);
       if(!application){
         res.json("applications not found");
       }
       res.json(application)
    }
    catch(error){
        res.json({message:error.message});
    }

}
exports.getApplicationById=async(req,res)=>{
    try{
        const application=await applicationService.getApplicationById(req.params.id);
       if(!application){
         res.json("application not found");
       }
       res.json(application)
    }
    catch(error){
        res.json({message:error.message});
    }

}
exports.createApplication=async(req,res)=>{
    try{
        const application=await applicationService.createApplication(req.body,req.user._id);
       if(!application){
         res.json("application not created");
       }
       res.json(application);
    }
    catch(error){
        res.json({message:error.message});
    }

}
exports.updateApplication=async(req,res)=>{
    try{
        const application=await applicationService.updateApplication(req.params.id,req.body);
       if(!application){
         res.json("failed to update");
       }
       res.json(application)
    }
    catch(error){
        res.json({message:error.message});
    }

}
exports.deleteApplication=async(req,res)=>{
    try{
        const application=await applicationService.deleteApplication(req.params.id);
       if(!application){
         res.json("application not found");
       }
       res.json("application deleted successfully")
    }
    catch(error){
        res.json({message:error.message});
    }

}