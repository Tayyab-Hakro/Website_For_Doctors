import mongoose from "mongoose";


const UserSchema = new mongoose.Schema({
    username :{
        type :String,
        required : true
    },
    email:{
        type : String,
        required : true,
    },password:{
        type : String,
        required : true,
    }
})

const Usersmodel = mongoose.model("Users" , UserSchema)
export default Usersmodel