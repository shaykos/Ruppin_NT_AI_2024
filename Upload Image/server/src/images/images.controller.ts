import { Request, Response } from "express";
import { v2 as cloudinary } from "cloudinary";

export async function uploadImage(req: Request, res: Response) {
  try {
    const { base64 } = req.body;

    if (!base64)
      return res.status(400).json({ msg: "base64 not included" });

    cloudinary.config({
      cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET
    });

    let result = await cloudinary.uploader.upload(base64, { upload_preset: 'ruppin',  });
    res.status(201).json({ result });

  } catch (error) {
    res.status(500).json({ error });
  }
}