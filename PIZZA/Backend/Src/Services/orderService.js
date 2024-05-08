const Order=require("../Model/orderModel");
const Item=require('../Model/itemModel');
exports.getAllOrders=async()=>{
    try{
       return await Order.find();
    }
    catch(error){
        throw new Error("Failed to fetch Orderss..")
    }
}
exports.getOrderById=async(id)=>{
    try{
      const orders= await Order.findById(id);
      if(!orders){
        throw new Error("Failed to get Orders");
      }
      return orders;
    }
    catch(error){
        throw new Error("Failed to fetch Orders")
    }
}

exports.updateOrders=async(id,updatedValue)=>{
    try{

      return await Order.findByIdAndUpdate(id,updatedValue,{new:true});
    }
    catch(error){
        throw new Error("Failed to update Orders.")
    }
}
exports.createOrder=async(newFields,itid,userid)=>{
  try{
    newFields.user=userid;
    newFields.items[0].itemid=itid;
    const item=await Item.findById(itid);
    const total=item.price*newFields.items[0].quantity;
    if(newFields.amount!==total){
      throw new Error("wrong amount added");
    }
    const order=new Order(newFields);
    return await order.save();
  }
  catch(error){
      throw new Error("Failed to add Order.")
  }
}
exports.deleteOrder=async(id)=>{
  try{

    return await Order.findByIdAndDelete(id);
  }
  catch(error){
      throw new Error("Failed to delete Order.")
  }
}
exports.addOrder=async(oid,itid,quan)=>{
  try{
     const order=Order.findById(oid);
     const obj={};
     obj.itemid=itid;
     obj.quantity=quan;
     order.items.push(obj)
     const total=0;
     for(let o in order.items){
      const item=await Item.findById(o.itemid);
      total=total+(item.price*o.quantity);
     }
     order.amount=total;
     return await order.save();
  }
  catch(error){
    throw new Error("Failed to add item in Order.")
  }
}