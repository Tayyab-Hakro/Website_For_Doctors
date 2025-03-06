import express from 'express'
import { UserAppointments } from '../controllers/UserAppointements.js';
import {verifyToken} from '../controllers/UserController.js'

const AppointmentRouter  = express.Router();
AppointmentRouter.post("/create" ,verifyToken,UserAppointments)


export default AppointmentRouter