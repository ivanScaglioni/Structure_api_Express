// conecion a la base de datos mongodb atlas


import * as dotenv from "dotenv";
dotenv.config();

import { connect } from "mongoose";
import mongoose from "mongoose";

mongoose.set("strictQuery", true);

export const startConnection = async () => {
  try {
    const db = await connect(`${process.env.MONGODB_URL}`, {
      keepAlive: true,
      autoIndex: false,
    });
    console.log(`conectado a la base de datos: ${db.connection.name}`);
  } catch (error) {
    console.log(error);
  }
};
