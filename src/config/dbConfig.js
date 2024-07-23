const mongoose = require('mongoose');
const { DB_URL } = require('./serverConfig');

async function connectDB(){
    try {
        await mongoose.connect(DB_URL);
        console.log("Successfully connected to db");
    } catch (error) {
        console.log("Unable to connect to db ",error);
    }
}
module.exports=connectDB;
