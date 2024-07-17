import { Request, Response } from "express";

export async function registerUser(req: Request, res: Response) {
  try {
    let { full_name, email, password } = req.body;

    let result = createUser(full_name, email, password);

    res.json(result);
    
    // if (!result._id)
    //   return res.status(400).json({ msg: 'db failed' });

    // res.status(201).json({ success: 'OK', user: { _id: user._id } });

  } catch (error) {
    res.status(500).json({ error });
  }
}

export async function loginUser(req: Request, res: Response) {

}