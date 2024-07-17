import bcrypt from "bcrypt";
import { User } from "./user.type";

export async function createUser(full_name: string, email: string, password: string) {

  let user: User = {
    full_name,
    email,
    password: bcrypt.hashSync(password, 10)
  }

  return await addUserToDB(user);
}