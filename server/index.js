import express from 'express';
// import { PORT, mongoDBURL } from './config.js';
import mongoose from 'mongoose';
import booksRoute from './routes/booksRoute.js';
import cors from "cors";
import dotenv from 'dotenv';
dotenv.config(); // This loads the variables from .env into process.env

const PORT = process.env.PORT || 5000;
const mongoDBURL = process.env.mongoDBURL;

app.use(express.static(path.join(__dirname, 'public')));

// Handle other routes and serve index.html for SPA behavior
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const app=express();

//Middleware for parsing request body//
app.use(express.json())

//Middleware for handling CORS POLICY//
app.use(cors());

app.get("/",(request,response)=>{
    console.log(request)
    return response.status(234).send("Welcome")
})

app.use("/",booksRoute);

mongoose
.connect(process.env.mongoDBURL)
.then(()=>{
    console.log(`App connected to Database`);
    app.listen(process.env.PORT || 5000,()=>{
    console.log(`App is listening to Port:${PORT}`);
    })
})
.catch((error)=>{
console.log(error);
})
    