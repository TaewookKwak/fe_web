import { SITE_NAME } from "@/constants/constants";
import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

let cached = (global as any).mongoose || { conn: null, promise: null };

export const connectToDatabase = async () => {
  if (cached.conn) {
    return cached.conn;
  } // 만약 cached.conn이 존재한다면, 반환

  if (!MONGODB_URI) {
    throw new Error(
      "MONDODB_URI가 없습니다. .env.local 파일에 MONGODB_URI를 추가해주세요."
    );
  }

  cached.promise = mongoose.connect(MONGODB_URI, {
    dbName: SITE_NAME,
    bufferCommands: false,
  }); // cached.promise에 mongoose.connect를 대입

  cached.conn = await cached.promise; // cached.conn에 cached.promise를 대입
  return cached.conn;
};
