import express from "express";
import * as userController from "../controllers/user.js";
import isAuthenticated from "../middleware/authorised.js";

const router = express.Router();

router.post("/login", userController.login);
router.post("/register", userController.register);
router.post("/logout", isAuthenticated, userController.logout);
router.get("/check", isAuthenticated, userController.check);
router.put("/updateuser", isAuthenticated, userController.updateUser);

export default router;