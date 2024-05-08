const mongoose=require('mongoose');
const orderSchema=new mongoose.Schema({
  user:{
   type:mongoose.Schema.Types.ObjectId,
   required:true,
   ref:"User"
  },
  items:[
    {
      itemid:{
        type:mongoose.Schema.Types.ObjectId,
        required:true
      },
      quantity:{
        type:Number,
        required:true
      }

    }
],
orderstatus:{
  type:String,
  required:true,
  enum:["order placed","cancelled"],
  default:"order placed"
},
deliverystatus:{
  type:String,
  required:true,
  enum:["pending","confirmed","preparation","delivered"],
  default:"pending"
},
amount:{
  type:Number,
  required:true
}
},{
    timestamps:true,
    
});

Order=new mongoose.model('Order',orderSchema);
module.exports=Order;
//663b218a811928e754aed077
//663a8d96fab28dc605769692