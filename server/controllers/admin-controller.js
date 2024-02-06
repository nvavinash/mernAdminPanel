const User = require("../models/user-model");
const Contact = require("../models/contact-model")

const getAllusers= async(req,res) =>{

    try{
        const users = await User.find({},{password: 0});
        if(!users || users.length === 0 ){
            res.status(404).json({message: "NO Users Found"})
        }
        res.status(200).json(
           users
        );
        }catch(error){
        next(error)
    }

};
//=================deleteUserById ------
const deleteUserById = async (req,res)=>{
   try {
    const id = req.params.id;
    await User.deleteOne({_id:id});
    return res.status(200).json({message: "User deleted Successfully"});
   } catch (error) {
    console.log(error)
   }
    
}
//===========getUserById--------------
const getUserById = async(req,res)=>{
try {
    const id = req.params.id;
    const data = await User.findOne({_id:id},{password:0});
    return res.status(200).json(data);

} catch (error) {
    next(error)
}
}
//=========== getAll contacts -------------------

const getAllcontacts = async(req,res)=>{
    try{
        const contacts = await Contact.find();
        if(!contacts || contacts.length === 0){
            res.status(404).json({message: "NO Contacts Found"});
        }
        res.status(200).json(contacts)
    }catch(error){
        next(error);
    }
};

//===========updateUserById--------------
const usersUpdateById = async(req,res)=>{
    try{
        const id = req.params.id;
        const updatedUserData = await req.body;
        const updateData = await User.updateOne({_id : id}, {
            $set: updatedUserData,
        });
        return res.status(200).json(updateData)
    }catch(error){
        console.error(error);
    }
}

module.exports = {getAllusers,getAllcontacts,deleteUserById,getUserById,usersUpdateById}