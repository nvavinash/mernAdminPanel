const User = require("../models/user-model");
const bcrypt = require("bcryptjs");
const home = async(req,res) =>{
try{
    res.status(200).send("Welcome to Admin Panel using Router Route Controller Page ");
}catch(error){
    console.log(error);
}
};
//-----register Controller---------------
const register = async(req,res) =>{
try{
    const {username,email,phone,password} = req.body;
    const userExists = await User.findOne({email: email ,phone: phone});
    if(userExists){
       return res.status(400).json({msg: "user already exists"});
    }
    // const saltRound = 10;
    // const hash_password = await bcrypt.hash(password,saltRound);
    const userCreated = await User.create({username,email,phone,password});
    res.status(201).json({msg: userCreated, token: await userCreated.generateToken(), userId: await userCreated._id.toString(),});
    
}catch(error){
    next(error);
}
};
//=========login Controller---------------

const login = async (req,res) =>{
try{
    const {email,password} = req.body;
    const userExists = await User.findOne({email: email});
    console.log({userExists});
    if(!userExists){
        res.status(400).json({message: "Invalid Credentials"});
    }
    const user = await bcrypt.compare(password, userExists.password);
    if(user){
        res.status(201).json({
            msg: "Login Successfull",
            token : await userExists.generateToken(),
            userId: userExists._id.toString(),
        })
    }else{
        res.status(401).json({msg: "Invalid Email or Password"});
    }
}catch(error){
    res.status(500).json({msg: "O..Ohh... Internal server error"});
}
};

const user = async(req,res) =>{
try{
    const userData = req.user;
    return res.status(200).json({userData});
}catch(error){
    console.log(`error from the user route ${error}`)
};
};

module.exports = {home, register, login, user};