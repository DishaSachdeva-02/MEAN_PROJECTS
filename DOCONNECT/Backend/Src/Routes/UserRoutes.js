const express=require('express');
const router=express.Router();
const userController=require('../Controller/userController')
const {authorizeUser}=require('../Middleware/authMiddleware');
router.get('/',authorizeUser('admin'),userController.getAllUsers);
router.get('/:id',authorizeUser('admin'),userController.getUserById);
router.put('/:id',authorizeUser('admin'),userController.updateUser);
module.exports=router;