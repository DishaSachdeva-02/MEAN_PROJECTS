const express=require('express');
const mongoose=require('mongoose');
const bodyparser=require('body-parser');
const appRoutes=require('./Src/Routes/application')
const authRoutes=require('./Src/Routes/authRoutes')
const downloadRoutes=require('./Src/Routes/downloadRoutes');
const {authenticateUser,authorizeUser,authorizeCreator}=require('./Src/Middleware/authMiddleware');
require('dotenv').config()
const app=express();
app.use(bodyparser.json());
mongoose.connect(process.env.MONGO_DB).then(()=>{
    console.log("Connected to database");
}).catch((error)=>{
    console.log("failed to connect to mongodb",error);
})
app.use('/applications',authenticateUser,appRoutes);
app.use('/downloads',authenticateUser,authorizeUser('user'),downloadRoutes)
app.use('/auth',authRoutes);
const port=process.env.PORT
app.listen(port,()=>{
    console.log(`Server is running at port ${port}`);
})