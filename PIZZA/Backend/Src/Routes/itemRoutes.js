const express=require('express');
const router=express.Router();
const itemController=require('../Controller/itemController')
const {authorizeUser}=require('../Middleware/authMiddleware');
router.get('/',itemController.getAllItems);
router.get('/:id',itemController.getItemById);
router.put('/:id',authorizeUser('admin'),itemController.updateitems);
router.post('/',authorizeUser('admin'),itemController.createitem);
router.delete('/:id',authorizeUser('admin'),itemController.deleteitem)
module.exports=router;