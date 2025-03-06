import mongoose from "mongoose";


const AppoitmentSchema = new mongoose.Schema({
    username:{type:String , required :true},
    phoneNumber :{type:Number , required :true},
    email:{type:String , required :true},
    fees : {type : Number  , default :0},
    address :{type:String , required :true},
date: { type: Date, default: Date.now, required: true }
})

const AppoitmentModel =  mongoose.model("AllPointments" , AppoitmentSchema)

export default AppoitmentModel