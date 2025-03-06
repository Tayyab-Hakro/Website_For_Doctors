
import AppoitmentModel from "../models/AppointmentModel.js"
export const UserAppointments = async( req ,res) =>{
    try{
        const {  username , phoneNumber ,email ,fees,address, date} = req.body
        if(!username || !phoneNumber  || !email|| !fees || !address || !date ){
            return res.status(401).json({success : false , message :"Fill all the fields"})
        }
        const Alldata =  new AppoitmentModel ({username , phoneNumber , email , fees , address , date})

        await Alldata.save()
        return res.status(200).json({success : true , message :"Appointment is create "})


    }catch(error){
        console.log(error)
    }
}