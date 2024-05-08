const itemService=require('../Services/itemService');
exports.getAllItems=async (req,res)=>{
    try{
      const items=await itemService.getAllItems();
      if(!items){
        res.status(404).json({message:"Failed to get items"})
      }
      res.json(items);
    }
    catch(error){
      res.status(500).json({message:error.message})
    }
}
exports.getItemById=async (req,res)=>{
    try{
      const items=await itemService.getItemById(req.params.id);
      if(!items){
        res.status(404).json({message:"Failed to get items"})
      }
      res.json(items);
    }
    catch(error){
      res.status(500).json({message:error.message})
    }
}

exports.updateitems=async (req,res)=>{
    try{
      const items=await itemService.updateitems(req.params.id,req.body);
      if(!items){
        res.status(404).json({message:"No items Found"})
      }
      res.json(items);
    }
    catch(error){
      res.status(500).json({message:error.message})
    }
}
exports.createitem=async (req,res)=>{
  try{
    const items=await itemService.createitem(req.body);
    if(!items){
      res.status(404).json({message:"No items Found"})
    }
    res.json(items);
  }
  catch(error){
    res.status(500).json({message:error.message})
  }
}
exports.deleteitem=async (req,res)=>{
  try{
    const items=await itemService.deleteitem(req.params.id);
    if(!items){
      res.status(404).json({message:"No items Found"})
    }
    res.json("Item deleted successfully..");
  }
  catch(error){
    res.status(500).json({message:error.message})
  }
}