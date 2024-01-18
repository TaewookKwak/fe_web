import { SITE_NAME } from "@/constants/constants";
import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

let cached = global.mongoose || { conn: null, promise: null };

export const connectToDatabase = async () => {
  console.log("====================================");
  console.log(cached);
  console.log("====================================");
  if (cached.conn) {
    return cached.conn;
  }

  if (!MONGODB_URI) {
    throw new Error(
      "MONDODB_URI가 없습니다. .env.local 파일에 MONGODB_URI를 추가해주세요."
    );
  }

  cached.promise =
    cached.promise ||
    mongoose
      .connect(MONGODB_URI, {
        dbName: "Evently",
        bufferCommands: false,
      })
      .then((mongoose) => {
        console.log("====================================");
        console.log(mongoose);
        console.log("====================================");
        return mongoose;
      });

  cached.conn = await cached.promise;
  return cached.conn;
};
