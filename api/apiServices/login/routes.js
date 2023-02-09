// rutas del login

import { Router } from "express";
const router = Router();

router.get("/", (req, res) => {
  res.send("login");
});


router.post("/", (req, res) => {
  console.log(req.body)
  res.send("login");
});

export default router;
