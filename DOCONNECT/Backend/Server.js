const express=require('express');
const mongoose=require('mongoose');
const bodyparser=require('body-parser');
const questionRoutes=require('./Src/Routes/QuestionRoutes')
const AnswerRoutes=require('./Src/Routes/AnswerRoutes')
const CommentRoutes=require('./Src/Routes/CommentRoutes')
const authRoutes=require('./Src/Routes/authRoutes')
const userRoutes=require('./Src/Routes/UserRoutes')
const {authenticateUser}=require('./Src/Middleware/authMiddleware')
require('dotenv').config()
const app=express();
app.use(bodyparser.json());
mongoose.connect(process.env.MONGO_DB).then(()=>{
    console.log("Connected to database");
}).catch((error)=>{
    console.log("failed to connect to mongodb",error);
})
app.use('/question/answer',authenticateUser,AnswerRoutes);
app.use('/question/answers/comment',authenticateUser,CommentRoutes);
app.use('/question',authenticateUser,questionRoutes);
app.use('/users',authenticateUser,userRoutes);
app.use('/auth',authRoutes);
const port=process.env.PORT
app.listen(port,()=>{
    console.log(`Server is running at port ${port}`);
})
