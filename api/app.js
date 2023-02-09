
//app de express


import express from "express";
import { error404, generalErrorHandle } from "./middleware/index.js";
import indexRoutes  from './routes/index.js'


const app = express();




app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use("/api", indexRoutes)
app.use(error404)
app.use(generalErrorHandle)






export default app;
