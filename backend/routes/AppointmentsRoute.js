import express from 'express'
import { UserAppointments } from '../controllers/UserAppointements.js';
const AppointmentRouter  = express.Router();
AppointmentRouter.post("/create" ,UserAppointments)


export default AppointmentRouter