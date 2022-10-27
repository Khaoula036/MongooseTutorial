const mongoose = require('mongoose')


//Create a schema
const userSchema = new mongoose.Schema({
    //information of the schema
    name : String,
    age : Number
})

//Create the model of the schema 
//User : the name which will be in DB in mongodb

module.exports = mongoose.model("User", userSchema)