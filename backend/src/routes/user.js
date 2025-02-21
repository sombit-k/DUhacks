import express from "express";
import * as userController from "../controllers/user.js";

const router = express.Router();

router.post("/login", userController.login);

router.post("/register", userController.register);

router.post("/logout", userController.logout);

// router.get("/auth",authMiddleware);

export default router;