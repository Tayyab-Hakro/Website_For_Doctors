import express from 'express'
import { UserAppointments } from '../controllers/UserAppointements.js';
import isAuthenticated from '../auths/auth.js';
const AppointmentRouter  = express.Router();
AppointmentRouter.post("/create" ,isAuthenticated,UserAppointments)


export default AppointmentRouter