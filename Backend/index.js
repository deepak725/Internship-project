const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
dotenv.config()
const mongoose = require('mongoose')
const { connectDatabase } = require("./Database/dbconnect.js")
connectDatabase()

const app = express();
app.use(express.json());
app.use(cors());

app.get("/",(req,res) => {
       console.log("hello")
       res.send("hi");
})

const projRouter = require('./Routes/project');
app.use('/project', projRouter);

app.listen(3001, () => {
    console.log('server started');
    
  });  