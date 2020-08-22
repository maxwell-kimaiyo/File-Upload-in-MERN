import express from 'express';
import bodyParser from 'body-parser';
import config from './config' 
import mongoose from 'mongoose'
import dotenv from 'dotenv';
import cors from 'cors'

import imageRoute from './route/fileRouter';
dotenv.config()
const URL = config.MONGODB_URL

mongoose.connect(URL,{ useNewUrlParser: true,useUnifiedTopology:true,useCreateIndex:true },(error)=>{
    if(!error){
        console.log(" connected to the database")
    }else{
        console.log("Error connecting")
    }
})

const app = express();
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use('/uploads', express.static('uploads'));

app.use('/api/image',imageRoute)

app.listen(4000,function(){
    console.log("server is running on port http://localhost:5000");
 });