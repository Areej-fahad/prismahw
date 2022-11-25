import { z } from "zod";
import  Express  from "express";
import validate from "./medilwear/valdait";
import movies from "./rout/movie.rout"
import dotenv from "dotenv"
import { connectDB } from "./config/db";
const app= Express();
const port= 5000
app.use("/", movies)

connectDB();

app.listen(port, () => {
    console.log(`Server is running in ${port}`);
  });
