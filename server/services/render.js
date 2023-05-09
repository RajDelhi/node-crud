//const mongoose = require("mongoose")
const userModel = require("../model/userModel")


/** 
 * @description Homepage
 * @method GET 
*/

exports.homePageRoute = async (req,res)=>{
   var data = await userModel.find({});
   res.render('index',{users : data});
}


exports.addUserPageRoute = (req,res)=>{
    res.render('add_user');
}

exports.updateUserPageRoute = async(req,res)=>{
    let user_id =req.query.id;
    
    var data = await userModel.find({_id:user_id});
    console.log(data)
    res.render('update_user.ejs',{user : data[0]});
}

exports.deleteUserRoute = (req,res)=>{
    res.render('delte');
}


exports.loginPageRoute = (req,res)=>{
    res.render('login_user');
}

exports.signUpPageRoute = (req,res)=>{
    res.render('login_user');
}