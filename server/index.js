import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import booksRoute from "./routes/booksAndUserRoute.js";
import cors from "cors";

const app = express();

//Middleware for parsing request body//
app.use(express.json());

//Middleware for handling CORS POLICY//
app.use(cors());

app.get("/", (request, response) => {
  console.log(request);
  return response.status(234).send("Welcome");
});

app.use("/", booksRoute);

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log(`App connected to Database`);
    app.listen(PORT, () => {
      console.log(`App is listening to Port:${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
