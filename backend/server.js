// Packages
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

/*
 * MIDDLEWARE
 */
app.use(cors());
app.use(express.json());

/*
 * CONNECT TO MONGODB
 */
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});


/*
 * MONGODB ROUTES
 */

 

/*
 * START SERVER
 */
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});