// todas las rutas de la api

import user from "#apiServices/user/routes.js";
import login from "#apiServices/login/routes.js";
import posts from "#apiServices/post/routes.js";
import { Router } from "express";

const router = Router();

router.use("/user", user);
router.use("/login", login);
router.use("/post", posts);

export default router;

