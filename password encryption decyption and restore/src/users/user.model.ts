import bcrypt from "bcrypt";
import emailjs, { EmailJSResponseStatus, send } from '@emailjs/nodejs';
import { User } from "./user.type";
import { addUserToDB, findUserDB } from "./user.db";

export async function createUser(full_name: string, email: string, password: string) {

  let user: User = {
    full_name,
    email,
    password: bcrypt.hashSync(password, 10)
  }

  return await addUserToDB(user);
}

export async function findUser(email: string, password: string) {
  let query = { email };
  let user = await findUserDB(query);

  if (!user)
    return { error: 'user not found' }

  if (!bcrypt.compareSync(password, user.password))
    return { error: 'invalid credentials' };

  return { _id: user._id, full_name: user.full_name, email: user.email };

}

export async function findUserByEmail(email: string) {
  let query = { email };
  let projection = { _id: 1, full_name: 1 }
  let user = await findUserDB(query, projection);

  if (!user)
    return { error: 'user not found' }

  //send email
  const templateParams = {
    from_name: "kuku",
    to_name: user.full_name,
    to_address: email,
    message: "password recovery",
    reply_to: "no reply",
    link: `http://localhost:9876/password/recovery/${user._id}`
  };

  try {
    await send('service_39aqex2', 'template_1dp1klr', templateParams,
      {
        publicKey: process.env.EMAIL_PUBLIC_KEY,
        privateKey: process.env.EMAIL_PRIVATE_KEY
      },
    );
    console.log('SUCCESS!');
  } catch (err) {
    if (err instanceof EmailJSResponseStatus) {
      console.log('EMAILJS FAILED...', err);
      return;
    }

    console.log('ERROR', err);
  }


  return { _id: user._id };
}
