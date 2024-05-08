const express=require('express');
const router=express.Router();
const {authorizeUser}=require('../Middleware/authMiddleware')
const  AnswerController=require('../Controller/AnswerController')

router.get('/:id',AnswerController.getAllAnswers);
router.get('/:id/details',AnswerController.getAnswerById)
router.post('/:id',AnswerController.createAnswer);
router.put('/:id/like',AnswerController.likeAnswer);
router.put('/:id',authorizeUser('admin'),AnswerController.updateAnswer);
router.delete('/:id',authorizeUser('admin'),AnswerController.deleteAnswer);
module.exports=router;