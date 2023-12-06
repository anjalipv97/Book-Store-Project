import express from "express";
// import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import booksRoute from "./routes/booksAndUserRoute.js";
import cors from "cors";
import { fileURLToPath } from "url";
import { dirname } from "path";
import path from "path";
import dotenv from "dotenv";

dotenv.config(); // This loads the variables from .env into process.env

const PORT = process.env.PORT || 5000;
const mongoDBURL = process.env.mongoDBURL;

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "dist")));

//Middleware for parsing request body//
app.use(express.json());

//Middleware for handling CORS POLICY//
app.use(cors());

app.get("/", (request, response) => {
  console.log(request);
  return response.status(234).send("Welcome");
});

app.use("/", booksRoute);

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

// // Serve static files from the 'dist' directory
// app.use(express.static(path.join(__dirname, "dist")));

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log(`App connected to Database`);
    console.log(process.cwd() + "/dist");
    app.listen(PORT, () => {
      console.log(`App is listening to Port:${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
