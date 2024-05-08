const Item=require("../Model/itemModel");
exports.getAllItems=async()=>{
    try{
       return await Item.find();
    }
    catch(error){
        throw new Error("Failed to fetch itemss..")
    }
}
exports.getItemById=async(id)=>{
    try{
      const items= await Item.findById(id);
      if(!items){
        throw new Error("Failed to get items");
      }
      return items;
    }
    catch(error){
        throw new Error("Failed to fetch items")
    }
}

exports.updateitems=async(id,updatedValue)=>{
    try{

      return await Item.findByIdAndUpdate(id,updatedValue,{new:true});
    }
    catch(error){
        throw new Error("Failed to update items.")
    }
}
exports.createitem=async(newFields)=>{
  try{
    const item=new Item(newFields);
    return await item.save();
  }
  catch(error){
      throw new Error("Failed to add item.")
  }
}
exports.deleteitem=async(id)=>{
  try{

    return await Item.findByIdAndDelete(id);
  }
  catch(error){
      throw new Error("Failed to delete item.")
  }
}