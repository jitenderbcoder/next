import express from "express";
import { checkAuth, googleAuth, logout } from "../controllers/authController.js";

const router = express.Router();
router.get("/google", googleAuth);
router.post("/google/logout", logout);
router.get('/check', checkAuth);


export default router;
