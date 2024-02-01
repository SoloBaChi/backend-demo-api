
const mongoose = require("mongoose");
// const { Schema, model } = mongoose;

const User = new mongoose.Schema({
email:{
type:String,
unique:true,
required:true
}
});

// create a user model
const userModel =  mongoose.model("user",User);

// export mthe user the model
module.exports = userModel;