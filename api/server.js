// conceccion con la base de datos y arranque de la app

import * as dotenv from 'dotenv' 
dotenv.config()
import app from "./app.js";
import { startConnection } from './services/database.js';


startConnection();
app.listen(process.env.PORT || 4000);
console.log("server is running on port " + `${process.env.PORT || 4000}` );
