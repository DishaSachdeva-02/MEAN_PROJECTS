const orderService=require('../Services/orderService');
exports.getAllOrders=async (req,res)=>{
    try{
      const orders=await orderService.getAllOrders();
      if(!orders){
        res.status(404).json({message:"Failed to get orders"})
      }
      res.json(orders);
    }
    catch(error){
      res.status(500).json({message:error.message})
    }
}
exports.getOrderById=async (req,res)=>{
    try{
      const orders=await orderService.getOrderById(req.params.id);
      if(!orders){
        res.status(404).json({message:"Failed to get orders"})
      }
      res.json(orders);
    }
    catch(error){
      res.status(500).json({message:error.message})
    }
}

exports.updateorders=async (req,res)=>{
    try{
      const orders=await orderService.updateOrders(req.params.id,req.body);
      if(!orders){
        res.status(404).json({message:"No orders Found"})
      }
      res.json(orders);
    }
    catch(error){
      res.status(500).json({message:error.message})
    }
}
exports.createOrder=async (req,res)=>{
  try{
    const orders=await orderService.createOrder(req.body,req.params.id,req.user._id);
    if(!orders){
      res.status(404).json({message:"No orders Found"})
    }
    res.json(orders);
  }
  catch(error){
    res.status(500).json({message:error.message})
  }
}
exports.deleteOrder=async (req,res)=>{
  try{
    const orders=await orderService.deleteOrder(req.params.id);
    if(!orders){
      res.status(404).json({message:"No orders Found"})
    }
    res.json("order deleted successfully..");
  }
  catch(error){
    res.status(500).json({message:error.message})
  }
}
exports.addOrder=async(req,res)=>{
  try{
    const quantity=req.body.quantity;
   const order=await orderService.addOrder(req.params.oid,req.params.itid,quantity);
   if(!order){
    res.status(404).json({message:"No orders Found"})
   }
   res.json("item added successfully");
  }
  catch(error){
    res.status(500).json({message:error.message})
  }
}