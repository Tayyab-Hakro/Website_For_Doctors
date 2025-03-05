import mongoose from "mongoose";


export const Connectdb =async ( )=>{
try{
    await mongoose.connect("mongodb://localhost:27017/DoctorWebsite")
    console.log("Mongodb is conneted")
}catch(err) {
    console.log(err)
}



} 