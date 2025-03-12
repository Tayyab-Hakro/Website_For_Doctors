import express from 'express'
import {  GetAllAppoitnments, UserAppointments } from '../controllers/UserAppointements.js';
const AppointmentRouter  = express.Router();
AppointmentRouter.post("/create" ,UserAppointments)
AppointmentRouter.get("/mydata/:id" ,GetAllAppoitnments)


export default AppointmentRouter