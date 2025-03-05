import express from 'express'
import { Login, SignUp } from '../controllers/UserController.js';


const UserRouter  = express.Router();

UserRouter.post("/signup" , SignUp)
UserRouter.post("/login" , Login)


export default UserRouter