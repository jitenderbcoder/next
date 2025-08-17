import axios from "axios";
import jwt from "jsonwebtoken";
import { oauth2Client } from "../utils/googleClient.js";
import User from "../models/User.js";

/* GET Google Authentication API. */
export const googleAuth = async (req, res, next) => {
  const code = req.query.code;
  try {
    const googleRes = await oauth2Client.getToken(code);
    console.log(googleRes, ":>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
    oauth2Client.setCredentials(googleRes.tokens);
    const userRes = await axios.get(
      `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${googleRes.tokens.access_token}`
    );
    const { email, name, picture, id } = userRes.data;
    // console.log(userRes);
    let user = await User.findOne({ email });

    if (!user) {
      user = await User.create({
        googleId: id,
        fullName: name,
        email,
        profileImage: picture,
      });
    }
    const { _id } = user;
    const token = jwt.sign({ _id, email }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_TIMEOUT,
    });
    res.status(200).json({
      message: "success",
      token,
      user,
    });
  } catch (err) {
    // console.log(err, ":>err>>>>>>>>>>>>>>>>>>>");
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};
