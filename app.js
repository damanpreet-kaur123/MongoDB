import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import myRoute from "./routes/route.js";

dotenv.config();

const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI;
const app = express();


// Middleware to parse JSON request bodies
app.use(express.json());

mongoose
  .connect(MONGO_URI)
  .then(() => console.log("MongoDB connected via Mongoose"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.get('/', (req,res) => {
  res.send('Mongoose run successfully');
});

app.use("/api", myRoute);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
