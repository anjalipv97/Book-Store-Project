import express from 'express';
import mongoose from 'mongoose';
import booksRoute from './routes/booksRoute.js';
import cors from "cors";
import dotenv from 'dotenv';
import path from 'path'; // Import the path module
import { fileURLToPath } from 'url';

dotenv.config(); 

const PORT = process.env.PORT || 5000;
const mongoDBURL = process.env.mongoDBURL;

const app=express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, 'public')));

// Handle other routes and serve index.html for SPA behavior
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


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
.connect(mongoDBURL)
.then(()=>{
    console.log(`App connected to Database`);
    app.listen(PORT || 5000,()=>{
    console.log(`App is listening to Port:${PORT}`);
    })
})
.catch((error)=>{
console.log(error);
})
    