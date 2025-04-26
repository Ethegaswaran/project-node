const express = require('express'); 
const app=express();
// Import dotenv to load environment variables
const env=require('dotenv').config();

const mangoose=require("mongoose");
app.use(express.json());
//import the routeing file
const ProductRoutes=require("./routes/userdata.route");
app.use("/products",ProductRoutes);
app.listen(3000,() =>{
    console.log('The server is running')
})

// reference the URI from .env
const uri = process.env.MongString;
//connect to mongodb
mangoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.error("Could not connect to MongoDB...", err));
