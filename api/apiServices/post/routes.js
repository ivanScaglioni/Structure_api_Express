// rutas de posts

import { Router } from "express";
const router = Router();

router.get("/", (req, res) => {
  res.send("posts");
});

router.post("/", (req, res) => {
  console.log(req.headers["content-type"]);

  const boundary = req.headers["content-type"].split("boundary=")[1];

  let body = "";
  req.on("data", (chunk) => (body += chunk));

  req.on("end", () => {
    body.split(boundary).map((data, index) => {
      console.log(index, data);
    });
  });

  res.send("posts");
});

export default router;
