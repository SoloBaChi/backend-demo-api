
// import modules
const express = require("express");
const cors  = require("cors");
const {json,urlencoded} = require("body-parser");
const dotenv = require("dotenv");
const { connectToDataBase } = require("./services/db.services");
const userRouter = require("./routers/user.route")


//create express app
const app = express();
dotenv.config({path:".env"});
app.use(cors({origin:"*"}));
app.use(urlencoded({extended:true}));
app.use(json())


// Other ROutes
// Default Route
app.post("/",(req,res)=>{
   return res.status(200).json({
    message:`Welcome to mussai test API`,
    status:"success",
    statusCode:200
   })
})


app.use("/api/v1",userRouter)



// Not found Route
app.use("*",(req,res)=>{
return res.status(400).json({
    message:`page not found!`,
    status:"error",
    statusCode:400
})
})




// create a port
const port = process.env.PORT || 3000;

// create seerver
const start = async() => {
// connect to database
await connectToDataBase();
app.listen(port,()=>{
console.log(`Server started at localhost:${port}`)
})
}

module.exports = start;
