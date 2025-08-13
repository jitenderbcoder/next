export type AuthMethod = "email" | "google" | "apple" | "facebook";
export type UserRole = "user" | "admin" | "moderator";
export type UserStatus = "pending" | "active" | "suspended";
export type DeviceType = "web" | "ios" | "android";
export type VerificationType = "password" | "otp";

/** Session Tokens */
export interface AuthSession {
  accessToken: string;
  refreshToken: string;
}

/**
 * Core User Data (shared between endpoints)
 */
export interface UserData {
  id: number;
  fullName: string;
  imgUrl: string | null;
  email: string;
  isEmailVerified: boolean;
  status: UserStatus;
  isProfileCompleted: boolean;
  googleId: string | null;
  appleId: string | null;
  facebookId: string | null;
  role: UserRole;
  authMethod: AuthMethod;
  createdAt: string;
  updatedAt: string;
  uniqueId: string;
  isNotificationEnabled: boolean;
}

/**
 * API Response Structure
 */
export interface ApiResponse<T> {
  isSuccess: boolean;
  data: T;
}

/**
 * Login Types
 */
export interface LoginPayload {
  email: string;
  password: string;
  role: UserRole;
  authMethod: AuthMethod;
  verificationType: VerificationType;
  deviceType: DeviceType;
  deviceId?: string;
}

export interface LoginResponseData extends UserData {
  session: AuthSession;
}

export type LoginResponse = ApiResponse<LoginResponseData>;

/**
 * Signup Types
 */
export interface SignupPayload {
  authMethod: AuthMethod;
  fullName: string;
  password: string;
  email: string;
  role: UserRole;
  deviceId: string;
  deviceType: DeviceType;
}

export type SignupResponseData = Omit<UserData, "session">;
export type SignupResponse = ApiResponse<SignupResponseData>;

/**
 * Auth State (for Redux)
 */
export interface AuthState {
  user: UserData | null;
  token: string | null;
  refreshToken: string | null;
  isLoading: boolean;
  error: string | null;
}

// Utility type for API responses
export type ApiResult<T> =
  | { status: "success"; data: T }
  | { status: "error"; error: string };
