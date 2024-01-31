
const mongoose = require("mongoose");

const dbService = {};

dbService.connectToDataBase = async() =>{

const dbUrl = process.env.DATABASE_URL;

try{
const params = {
useNewUrlParser:true,
useUnifiedTopology:true
}
const connect = await mongoose.connect(dbUrl,params);
console.log(`connected succefully to ${connect.connection.host} database `)
}
catch(e){
console.log(`could not connect to the database ${e.message}`)
}
}

module.exports = dbService; 