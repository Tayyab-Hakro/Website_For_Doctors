
import AppointmentModel from "../models/AppointmentModel.js"
export const UserAppointments = async( req ,res) =>{
    try{
        const { userId,  username , phoneNumber ,email ,fees,address, date} = req.body
        if(!username || !phoneNumber  || !email|| !fees || !address || !date ){
            return res.status(401).json({success : false , message :"Fill all the fields"})
        }
        const Alldata =  new AppointmentModel ({userId , username , phoneNumber , email , fees , address , date})

        await Alldata.save()
        return res.status(200).json({success : true , message :"Appointment is create "})


    }catch(error){
        console.log(error)
    }
}

export const GetAllAppoitnments = async( req , res) =>{
    try{
        const userId = req.params.userId
      let response =  await AppointmentModel.find({userId :userId })
       if(!response){
        return res.status(401).json({success:false , message:"Something wrong GetAllAppointments"})
       }         
       
    return res.status(200).json({
        success: true,
        message: "Appointments fetched successfully",
        data: response,
      });
    }
         catch(error){
        console.log(error)
    }
}