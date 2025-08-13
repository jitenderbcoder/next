import express from "express";
import fetch from "node-fetch";
import User from "../models/User.js";

const router = express.Router();

router.post("/google", async (req, res) => {
  try {
    const { authMethod, googleId, fullName, email, accessToken } = req.body;

    // Validate required fields
    if (!authMethod || !accessToken) {
      return res.status(400).json({
        success: false,
        message: "Missing required fields: authMethod and accessToken",
      });
    }

    if (authMethod !== "google") {
      return res.status(400).json({
        success: false,
        message: "Invalid authentication method",
      });
    }

    // Verify the access token by fetching user info
    const userInfoResponse = await fetch(
      "https://www.googleapis.com/oauth2/v3/userinfo",
      {
        headers: { Authorization: `Bearer ${accessToken}` },
      }
    );

    if (!userInfoResponse.ok) {
      const errorData = await userInfoResponse.json();
      console.error("Google API error:", errorData);
      return res.status(401).json({
        success: false,
        message: "Failed to verify Google access token",
        error: errorData.error,
      });
    }

    const userInfo = await userInfoResponse.json();
    console.log("Google user info:", userInfo);

    // Optional: Verify user data matches your request
    if (googleId && userInfo.sub !== googleId) {
      return res.status(401).json({
        success: false,
        message: "Google ID mismatch",
        received: googleId,
        expected: userInfo.sub,
      });
    }

    if (email && userInfo.email !== email) {
      return res.status(401).json({
        success: false,
        message: "Email mismatch",
        received: email,
        expected: userInfo.email,
      });
    }

    let user = await User.findOne({ email: userInfo.email });
    const userData = {
      fullName: userInfo.given_name || fullName,
      email: userInfo.email,
      googleId: userInfo.sub,
      picture: userInfo.picture,
      lastLogin: new Date(),
    };

    if (!user) {
      // New user - create account
      user = new User({
        ...userData,
        createdAt: new Date(),
      });
      await user.save();
    } else {
      // Existing user - update last login
      user.lastLogin = new Date();
      await user.save();
    }

    // Generate JWT token
    // const token = jwt.sign(
    //   { userId: user._id, email: user.email },
    //   config.jwt.secret,
    //   { expiresIn: TOKEN_EXPIRATION }
    // );

    // Secure cookie settings for production
    // res.cookie("token", token, {
    //   httpOnly: true,
    //   secure: process.env.NODE_ENV === "production",
    //   sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
    //   maxAge: 3600000, // 1 hour
    // });

    // Authentication successful
    return res.json({
      success: true,
      user: {
        id: userInfo.sub,
        fullName: userInfo.given_name || fullName,
        email: userInfo.email,
        picture: userInfo.picture,
      },
    });
  } catch (error) {
    console.error("Authentication error:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
});

export default router;
