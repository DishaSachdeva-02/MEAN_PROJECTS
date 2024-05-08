const express=require('express');
const mongoose=require('mongoose');
const bodyparser=require('body-parser');
const songRoutes=require('./Src/Routes/songRoutes')
const authRoutes=require('./Src/Routes/authRoutes');
const playlistRoutes=require('./Src/Routes/playlistRoutes')
const {authenticateUser}=require('./Src/Middleware/authMiddleware');
require('dotenv').config()
const app=express();
app.use(bodyparser.json());
mongoose.connect(process.env.MONGO_DB).then(()=>{
    console.log("Connected to database");
}).catch((error)=>{
    console.log("failed to connect to mongodb",error);
})
app.use('/songs',authenticateUser,songRoutes);
app.use('/playlists',authenticateUser,playlistRoutes);
app.use('/auth',authRoutes)
const port=process.env.PORT
app.listen(port,()=>{
    console.log(`Server is running at port ${port}`);
})
