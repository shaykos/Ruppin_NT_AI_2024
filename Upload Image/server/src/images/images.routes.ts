import { Router } from "express";
import { uploadImage } from "./images.controller";

const imageRouter = Router();

imageRouter.post('/upload', uploadImage);

export default imageRouter;
