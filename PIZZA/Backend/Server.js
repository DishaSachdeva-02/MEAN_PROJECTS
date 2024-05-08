const express=require('express');
const mongoose=require('mongoose');
const bodyparser=require('body-parser');

const authRoutes=require('./Src/Routes/authRoutes')
const itemRoutes=require('./Src/Routes/itemRoutes')
const orderRoutes=require('./Src/Routes/orderRoutes')
const {authenticateUser,authorizeUser,authorizeCreator}=require('./Src/Middleware/authMiddleware');
require('dotenv').config()
const app=express();
app.use(bodyparser.json());
mongoose.connect(process.env.MONGO_DB).then(()=>{
    console.log("Connected to database");
}).catch((error)=>{
    console.log("failed to connect to mongodb",error);
})
app.use('/auth',authRoutes);
app.use('/item',authenticateUser,itemRoutes);
app.use('/order',authenticateUser,orderRoutes);
const port=process.env.PORT
app.listen(port,()=>{
    console.log(`Server is running at port ${port}`);
})
//663a8c6d57c68a0b429994cd