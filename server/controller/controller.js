const userModel = require("../model/userModel")

exports.addUser = async (req, res) => {

    if (req.body.name === "") {
        res.status(400).send({ message: "Please submit complete detail of the form" })
    }
    // Arranging data 
    var userData = {
        name: req.body.name,
        email: req.body.email,
        gender: req.body.gender,
        status: req.body.status

    }
    var insertData = new userModel(userData)
    var status = await insertData.save();
    if (!status) {
        res.send({ message: 'Recond could not save successfuly' });
    } else {
        res.redirect('/');
    }
}


exports.fetchUser = async (req, res) => {
    
    var data = await userModel.find({});
    if (!data) {
        res.send({ message: 'Recond could not fetch' });
    } else {
        res.send({ message: 'Recond found successfully' });;
    }
}


exports.updateUser = async (req, res) => {
    
    var userData = {
        name: req.body.name,
        email: req.body.email,
        gender: req.body.gender,
        status: req.body.status

    }
    var user_id ={
        _id:req.body.id
    } ;
    console.log(userData)
    console.log(user_id)
    var data = await userModel.updateOne(user_id,{$set:userData});
     console.log(data)
    if (!data) {
        res.send({ message: 'Recond could not update' });
    } else {
        //res.send({ message: 'Recond updated successfully' });;
        res.redirect("/")
    }
}

exports.loginUser = (req,res)=>{
   // var userObj =  new userModel()
    let email   =   req.body.email;
    console.log(email)
    var data  = userModel.find({email:{email}})
    console.log(data.status)
    if(!data){
        res.send("Please enter valid credentials")
    }else{
        res.send("you are successfully login")
    }
   
}


exports.deleteUser =  async (req, res)=>{
    var data = await userModel.deleteOne({_id:req.body.id});
    res.send(data); 
         
  }
