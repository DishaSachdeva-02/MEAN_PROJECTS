const mongoose=require('mongoose');
const itemSchema=new mongoose.Schema({
  itemname:{
    type:String,
    required:true
  },
  category:{
    type:String,
    required:true,
    enum:["veg pizza","non-veg pizza","double cheese pizza","drinks"]
  },
  price:{
    type:Number,
    required:true
  }
},{
    timestamps:true,
    
});

Item=new mongoose.model('Item',itemSchema);
module.exports=Item;