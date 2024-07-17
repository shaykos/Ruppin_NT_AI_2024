import { User } from "./user.type";
import { MongoClient } from "mongodb";

const DB_INFO = {
  host: process.env.CONNECTION_STRING as string,
  db: process.env.DB_NAME,
  collection: 'Users'
}

export async function addUserToDB(user: User) {

  let mongo = new MongoClient(DB_INFO.host);
  try {
    await mongo.connect();
    return await mongo.db(DB_INFO.db).collection(DB_INFO.collection).insertOne(user);
  } catch (error) {
    throw error;
  }
  finally {
    await mongo.close();
  }
}


export async function findUserDB(query = {}, projection = {}) {
  let mongo = new MongoClient(DB_INFO.host);
  try {
    await mongo.connect();
    return await mongo.db(DB_INFO.db).collection(DB_INFO.collection).findOne(query, { projection });
  } catch (error) {
    throw error;
  }
  finally {
    await mongo.close();
  }
} 