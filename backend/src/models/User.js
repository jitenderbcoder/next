import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  googleId: { type: String, required: true, unique: true },
  fullName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  bio: { type: String, default: "" },
  profileImage: { type: String, default: "" }, // Cloudinary URL
  coverImage: { type: String, default: "" }, // Cloudinary URL
  location: { type: String, default: "" },
  website: { type: String, default: "" },
  socialLinks: { type: [String], default: [] },
  interests: { type: [String], default: [] },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("User", userSchema);
