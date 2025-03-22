import express from "express";
import * as userController from "../controllers/user.js";
import authMiddleware from "../middleware/auth.js";

const router = express.Router();

router.post("/login", userController.login);
router.post("/register", userController.register);
router.post("/logout", authMiddleware, userController.logout);
router.get("/check", authMiddleware, userController.check);
router.put("/updateuser", authMiddleware, userController.updateUser); // Remove upload middleware

export default router;