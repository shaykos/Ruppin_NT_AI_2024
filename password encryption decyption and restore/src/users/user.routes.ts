import { Router } from "express";
import { loginUser, registerUser } from "./user.controller";

const userRouter = Router();

userRouter
  .post('/register', registerUser)
  .post('/login', loginUser)

export default userRouter;