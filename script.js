//Connecting to the DB 
const mongoose = require('mongoose')
//Import User Model 
const User = require ("./User")

// if mongodb is already installed use: mongodb://localhost/<name of DB>
mongoose.connect("mongodb://127.0.0.1/testdb");


// //Create a new user : local copy
// const user = new User({ name : "Kyle" , age: 26})
// // To save in the DB  : save async function
// user.save()

run()
async function run() {
    const user = new User({ name : "Kyle" , age: 26})
    await user.save()
    console.log(user)
}


//first Code
// mongoose.connect("mongodb://localhost/testdb",
//    () => {
//     console.log("connected")
//    },
//    e => console.error(e)
// )