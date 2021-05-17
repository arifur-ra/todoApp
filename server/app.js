const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
const todoRoutes = require("./routes/todoRoute");

// Initialize app and port
const app = express();
const PORT = process.env.PORT || 3002;

// Middleware

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// the routes and use it
app.use("/todo", todoRoutes);

// Connected to database MongoDB and Server running
const uri = process.env.MONGODB_URL;

mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(
      PORT,
      console.log(`Database is Connected & Server running on port:${PORT}`)
    )
  )
  .catch((err) => console.log(err));
