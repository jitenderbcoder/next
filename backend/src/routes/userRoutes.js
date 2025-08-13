import express from "express";
import User from "../models/User.js";
import { upload } from "../services/cloudinary.js";
import authMiddleware from "../middlewares/auth.js";

const router = express.Router();

router.post(
  "/upload",
  upload.fields([{ name: "profileImage" }, { name: "coverImage" }]),
  async (req, res, next) => {
    try {
      const { userId } = req.body;
      const user = await User.findById(userId);
      if (!user) return res.status(404).json({ error: "User not found" });

      if (req.files.profileImage) {
        user.profileImage = req.files.profileImage[0].path;
      }
      if (req.files.coverImage) {
        user.coverImage = req.files.coverImage[0].path;
      }
      await user.save();
      res
        .status(200)
        .json({ profileImage: user.profileImage, coverImage: user.coverImage });
    } catch (error) {
      next(error);
    }
  }
);

router.get("/me", authMiddleware, async (req, res, next) => {
  try {
    const user = await User.findById(req.user.userId).select("-googleId -__v");
    if (!user) return res.status(404).json({ error: "User not found" });
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
});

router.put(
  "/me",
  authMiddleware,
  upload.fields([{ name: "profileImage" }, { name: "coverImage" }]),
  async (req, res, next) => {
    try {
      const user = await User.findById(req.user.userId);
      if (!user) return res.status(404).json({ error: "User not found" });

      const updates = req.body;
      if (req.files.profileImage) {
        user.profileImage = req.files.profileImage[0].path;
      }
      if (req.files.coverImage) {
        user.coverImage = req.files.coverImage[0].path;
      }
      Object.assign(user, updates); // Update other fields like bio, location, etc.
      await user.save();
      res.status(200).json(user);
    } catch (error) {
      next(error);
    }
  }
);

export default router;
