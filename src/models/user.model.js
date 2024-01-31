
const mongoose = require("mongoose");
// const { Schema, model } = mongoose;

const User = new mongoose.Schema({
firstName:{
type:String,
trim:true,
required:true,
lowercase:true
},
lastName:{
type:String,
trim:true,
required:true,
lowercase:true
},
email:{
type:String,
unique:true,
required:true
},
password:{
type:String,
unique:true,
required:true,
}
});

// create a user model
const userModel =  mongoose.model("user",User);

// export mthe user the model
module.exports = userModel;