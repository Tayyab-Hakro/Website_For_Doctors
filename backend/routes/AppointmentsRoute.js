import express from 'express'
import { GetAllAppointments, UserAppointments } from '../controllers/UserAppointements.js';
const AppointmentRouter  = express.Router();
AppointmentRouter.post("/create" ,UserAppointments)
AppointmentRouter.get("/mydata/:id" ,GetAllAppointments)


export default AppointmentRouter