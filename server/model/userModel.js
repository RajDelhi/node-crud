const MyMongoose = require("mongoose")

const userSchema = new MyMongoose.Schema({
    name: String,
    email :{
            type:String,
            unique:true,
            require:true
    },gender:String,
    status:String
});

const addUser   =   MyMongoose.model("user",userSchema)   

module.exports = addUser
