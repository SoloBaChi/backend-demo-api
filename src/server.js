
// import modules
const express = require("express");
const cors  = require("cors");
const {json,urlencoded} = require("body-parser");
const dotenv = require("dotenv");
const { connectToDataBase } = require("./services/db.services");


//create express app
const app = express();
dotenv.config({path:".env"});
app.use(cors({origin:"*"}));
app.use(urlencoded({extended:true}));
app.use(json())


// create a port
const port = 3001;

// create seerver
const start = async() => {
// connect to database
await connectToDataBase();
app.listen(port,()=>{
console.log(`Server started at localhost:${port}`)
})
}

module.exports = start;
