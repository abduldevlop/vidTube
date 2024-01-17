import { Router } from "express";
import { googleAuth, singUp, singin } from "../controllers/auth.controllers.js";
const router = Router();

// create a user
router.route("/signup").post(singUp);

// sing in user
router.route("/signin").post(singin);

// google auth
router.route("/google").post(googleAuth);
export default router;
