const express = require('express')
const mongoose = require("mongoose")

const dbConnect = async()=>{

    try{
         // mongo DB connection
        const connect = await mongoose.connect(process.env.MONGOURL)
        console.log("Mongo DB connected at "+connect.connection.host);
      

    }catch(err){
        console.log("Mongo DB connection error : "+ err);
        process.exit(1);
    }
   

}

module.exports = dbConnect;