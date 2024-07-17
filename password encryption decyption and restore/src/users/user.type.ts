import { ObjectId } from "mongodb"

export type User = {
  _id?: ObjectId,
  full_name: string,
  email: string,
  password: string
}