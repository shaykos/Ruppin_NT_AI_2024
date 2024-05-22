import { readFile } from 'fs/promises';
import { join } from 'path';
import { User } from './types/user.type';

export async function login(email: string, password: string): Promise<User | undefined> {
  try {
    //יצירת הניתוב לקובץ 
    let file_path = join(__dirname, 'db', 'users.json');

    //data קריאת הקובץ ושמירה במשתנה 
    let data = await readFile(file_path);

    //JSON המרה של הדאטה לאובייקט 
    let users: User[] = JSON.parse(data.toString());

    //הפעלת הפונקציה שמחזירה את המשתמש
    return checkIfExists(users, email, password);

  } catch (error) {
    throw error;
  }

}


function checkIfExists(users: User[], email: string, password: string) {
  let user = users.find((u: User) => u.email == email && u.password == password);
  return user;
}

