import { Router } from "express";
import { loginUser, registerUser, forgotPassword } from "./user.controller";

const userRouter = Router();

userRouter
  .post('/register', registerUser)
  .post('/login', loginUser)
  .post('/forgot', forgotPassword)

export default userRouter;