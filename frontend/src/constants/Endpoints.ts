const Endpoints = {
  LOGIN: "auths/login",
  LOGOUT: "auths/logout",
  REGISTER: "auths/signup",
  GOOGLE: "auths/google",
  FORGOT: "auths/forgotPassword",
  OTP: "auths/verifyOTP",
  RESEND: "/auths/resendOtp",
  RESET: "auths/resetPassword",
  CHANGE_PASSWORD: "auths/updatePassword",
  UPLOAD_IMAGES: "images/upload",
  // SOCIAL_AUTH: "auths/socialLogin",
  SOCIAL_AUTH: 'auth/google',
};
export default Endpoints;
