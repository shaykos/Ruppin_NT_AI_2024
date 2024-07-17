import { Request, Response } from "express";
import { createUser, findUser, findUserByEmail } from "./user.model";

export async function registerUser(req: Request, res: Response) {
  try {
    let { full_name, email, password } = req.body;

    let result = await createUser(full_name, email, password);

    if (!result.insertedId)
      return res.status(400).json({ msg: 'db failed' });

    res.status(201).json({ success: 'OK', user: { _id: result.insertedId } });

  } catch (error) {
    res.status(500).json({ error });
  }
}

export async function loginUser(req: Request, res: Response) {
  try {
    let { email, password } = req.body;

    let result = await findUser(email, password);

    if (result.error)
      return res.status(400).json({ result });

    res.status(200).json({ success: 'OK', user: result });

  } catch (error) {
    res.status(500).json({ error });
  }
}

export async function forgotPassword(req: Request, res: Response) {
  try {
    let { email } = req.body;

    let result = await findUserByEmail(email);

    if (result?.error)
      return res.status(400).json({ result });

  } catch (error) {
    res.status(500).json({ error });
  }

}