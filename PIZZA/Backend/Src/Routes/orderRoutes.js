const express=require('express');
const router=express.Router();
const orderController=require('../Controller/orderController')

const {authorizeUser,authorizeCreator}=require('../Middleware/authMiddleware');
router.get('/',authorizeUser('user'),orderController.getAllOrders);
router.get('/:id',authorizeUser('user'),authorizeCreator,orderController.getOrderById);
router.put('/:id',authorizeUser('user'),authorizeCreator,orderController.updateorders);
router.post('/:id',authorizeUser('user'),orderController.createOrder);
router.delete('/:id',authorizeUser('user'),authorizeCreator,orderController.deleteOrder);
router.put('/:oid/item/:itid',authorizeUser('user'),orderController.addOrder);
module.exports=router;