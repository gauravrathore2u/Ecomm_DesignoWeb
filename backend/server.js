const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const mongoose = require('mongoose');
const userRouter = require('./routes/userRouter.js');
const productsRouter = require('./routes/productsRouter.js');

//app config
dotenv.config();
const app = express();
app.use(express.json());
app.use(cors())



//mongoDB connection
mongoose.connect(process.env.MONGODB_URL)
    .then((con)=>{
        console.log("mongoDB is connected");
    })
    .catch((err)=>{
        console.log("Error in monboDB connection", err);
    });


app.use('/v1/user', userRouter);
app.use('/v1/products', productsRouter);


//Server connection
const PORT = process.env.SERVER_PORT || 8000;
app.listen(PORT, ()=>{
    console.log(`server is running on ${PORT}....`);
})

