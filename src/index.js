// require('dotenv').config({path: './env'})
import dotenv from 'dotenv';
import mongoose from "mongoose";
import { DB_NAME } from './constants.js';
import connectDB from "./db/index.js";
import express from 'express';

dotenv.config({
    path: './env',
});

const app = express()

connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running on port ${process.env.PORT || 8000}`);
    })
})
.catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
});

// 1st approach to connect with DB

// import express from "express";

// const app = express()

// (async () => {
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         app.on("error", (error) => {
//             console.log("ERROR: ", error);
//             throw error
//         })
//         app.listen(precess.env.PORT, () => {
//             console.log(`App is listening on port ${process.env.PORT}`);
//         })

//     } catch (error) {
//         console.log('ERROR: ', error);
//         throw error
//     }
// })()