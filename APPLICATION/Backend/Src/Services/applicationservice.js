const Application = require("../Models/Application");
const Comment = require("../Models/Comment");
const User = require("../Models/User");

exports.getAllApplications=async(filters)=>{
   try{
      const {appName,category}=filters;
      const query={};
      if(appName){
         query.appName={$regex:new RegExp(appName,'i')};
      }
      if(category){
         query.genre=category;
      }
      query.visibility=true;
    return await Application.find(query).populate('comments');
   }
   catch(error){
    throw new Error(error);
   }
}
exports.getApplicationById=async(id)=>{
    try{
     return await Application.findById(id);
    }
    catch(error){
     throw new Error(error);
    }
 }
 exports.createApplication=async(newFields,id)=>{
    try{
        newFields.user=id;
        const application=new Application(newFields);
     return await application.save();
    }
    catch(error){
     throw new Error(error);
    }
 }
 exports.updateApplication=async(id,updatedFields)=>{
    try{
    const application=Application.findById(id);
    if(application.visibility==true && updatedFields.visibility==false){
      await User.updateMany({ downloadedApplications:id},{$pull:{downloadedApplications:id}});
    }
     return await Application.findByIdAndUpdate(id,updatedFields,{new:true});
    }
    catch(error){
     throw new Error(error);
    }
 }
exports.deleteApplication=async(id)=>{
    try{
      await Comment.deleteMany({application:id});
      await User.updateMany({ downloadedApplications:id},{$pull:{downloadedApplications:id}});
     return await Application.findByIdAndDelete(id);
    }
    catch(error){
     throw new Error(error);
   }
}