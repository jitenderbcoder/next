import axios from "axios";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

/* GET Google Authentication API with access_token. */
export const googleAuth = async (req, res, next) => {
  const access_token = req.query.access_token;

  try {
    // Input validation
    if (!access_token) {
      return res.status(400).json({
        success: false,
        message: "Access token is required",
      });
    }

    // Get user data from Google
    const userRes = await axios.get(
      `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${access_token}`,
      { timeout: 10000 }
    );

    const { email, name, picture, id } = userRes.data;

    // Check for existing user by email OR googleId
    let user = await User.findOne({
      $or: [{ email }, { googleId: id }],
    });

    let isNewUser = false;

    if (!user) {
      // NEW USER - First time registration
      user = await User.create({
        googleId: id,
        fullName: name,
        email,
        profileImage: picture,
        provider: "google",
        isEmailVerified: true,
        createdAt: new Date(),
      });
      isNewUser = true;
    } else {
      // EXISTING USER - Update profile and login time
      user.fullName = name; // Update name in case it changed
      user.profileImage = picture; // Update avatar
      user.lastLoginAt = new Date();

      // Link Google ID if user signed up with email before
      if (!user.googleId) {
        user.googleId = id;
      }

      await user.save();
    }

    // After successful authentication
    const token = jwt.sign(
      { _id: user._id, email: user.email },
      process.env.JWT_SECRET,
      {
        expiresIn: process.env.JWT_TIMEOUT || "7d",
      }
    );

    res.cookie("auth_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "strict" : "lax", // ✅ KEY FIX
      path: "/",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    // Debug: Log updated cookie setting
    console.log("🍪 Setting cookie:", {
      name: "auth_token",
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "strict" : "lax", // This should show 'lax' now
    });

    res.status(200).json({
      success: true,
      message: isNewUser ? "Account created successfully" : "Login successful",
      user: {
        id: user._id,
        email: user.email,
        fullName: user.fullName,
        profileImage: user.profileImage,
      },
    });
  } catch (err) {
    console.error("Google Auth Error:", err);

    // Handle specific Google API errors
    if (err.response?.status === 401) {
      return res.status(401).json({
        success: false,
        message: "Invalid or expired Google access token",
      });
    }

    res.status(500).json({
      success: false,
      message: "Authentication failed",
      error: process.env.NODE_ENV === "development" ? err.message : undefined,
    });
  }
};

export const logout = async (req, res) => {
  // Clear auth cookies
  res.clearCookie("auth_token");
  res.clearCookie("is_authenticated");

  res.json({
    success: true,
    message: "Logged out successfully",
  });
};

// Backend: Check auth status
export const checkAuth = async (req, res) => {
  try {
    const token = req.cookies.auth_token;

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Not authenticated",
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded._id).select("-googleId");

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "User not found",
      });
    }

    res.json({
      success: true,
      user: {
        id: user._id,
        email: user.email,
        fullName: user.fullName,
        profileImage: user.profileImage,
      },
    });
  } catch (error) {
    console.error("Check auth error:", error);
    res.status(401).json({
      success: false,
      message: "Invalid token",
    });
  }
};
