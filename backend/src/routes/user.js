import express from "express";
import * as userController from "../controllers/user.js";
import authenticate from "../middleware/authmiddleware.js";


const router = express.Router();

router.post("/login", userController.login);

router.post("/register", userController.register);

router.post("/logout", userController.logout);

router.get("/check",authenticate, userController.check);

router.put("/updateuser", authenticate, userController.updateUser);


export default router;