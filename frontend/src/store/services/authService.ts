import { GenericApi } from "../../api/genricApi";
import Endpoints from "../../constants/Endpoints";
import { setLogout, setToken, setUser } from "../slice/authSlice";
import type {
  LoginPayload,
  LoginResponse,
  SignupPayload,
  SignupResponse,
} from "../types/auth";

const onLoginStarted = async (_: any, { dispatch, queryFulfilled }: any) => {
  try {
    const { data } = await queryFulfilled;
    if (data?.data?.isEmailVerified) {
      dispatch(setToken(data.data.session.accessToken));
      dispatch(
        setUser({
          accessToken: data.data?.session?.accessToken,
          user: data.data,
        })
      );
    }
  } catch (_error) {
    // console.error("Error", _error);
  }
};

export const authApi = GenericApi.injectEndpoints({
  endpoints: (builder) => ({
    // Login
    login: builder.mutation<LoginResponse, LoginPayload>({
      query: (values) => {
        return {
          url: Endpoints.LOGIN,
          method: "POST",
          body: values,
        };
      },
      onQueryStarted: onLoginStarted,
      invalidatesTags: ["Auth"],
    }),
    // register
    register: builder.mutation<SignupResponse, SignupPayload>({
      query: (values) => ({
        url: Endpoints.REGISTER,
        method: "POST",
        body: values,
      }),
      onQueryStarted: onLoginStarted,
      invalidatesTags: ["Auth"],
    }),
    // Forgot Password
    forgotPassword: builder.mutation({
      query: (values) => ({
        url: Endpoints.FORGOT,
        method: "POST",
        body: values,
      }),
    }),
    // Verify OTP
    verifyCode: builder.mutation({
      query: (values) => ({
        url: Endpoints.OTP,
        method: "POST",
        body: values,
      }),
      onQueryStarted: onLoginStarted,
      invalidatesTags: ["Auth"],
    }),
    // Verify OTP For Forgot Pass
    verifyCodeForgotPassword: builder.mutation({
      query: (values) => ({
        url: Endpoints.OTP,
        method: "POST",
        body: values,
      }),
      // onQueryStarted: onLoginStarted,
      invalidatesTags: ["Auth"],
    }),
    // Resend OTP
    resendOtp: builder.mutation({
      query: (values) => {
        return {
          url: Endpoints.RESEND,
          method: "POST",
          body: values,
        };
      },
      invalidatesTags: ["Auth"],
    }),
    // Reset Password//
    resetPassword: builder.mutation({
      query: (data) => ({
        url: `${Endpoints.RESET}/${data.id}`,
        method: "PUT",
        body: data.values,
      }),
    }),
    // change/update password
    changePassword: builder.mutation({
      query: (data) => ({
        url: `${Endpoints.CHANGE_PASSWORD}/${data.id}`,
        method: "PUT",
        body: data.values,
      }),
    }),
    // Logout
    logout: builder.mutation({
      query: (id) => ({
        url: `${Endpoints.LOGOUT}/${id}`,
        method: "PUT",
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          dispatch(setLogout());
          setTimeout(() => {
            dispatch(GenericApi.util.resetApiState());
          }, 1000);
        } catch (error) {
          // console.error(error);
        }
      },
    }),
    // Social Auth
    socialLogin: builder.mutation({
      query: (values) => {
        return {
          url: Endpoints.SOCIAL_AUTH,
          method: "POST",
          body: values,
        };
      },
      onQueryStarted: onLoginStarted,
    }),
    // Google api to get user data
    getGoogleUserInfo: builder.query<any, string>({
      query: (accessToken) => ({
        url: "https://www.googleapis.com/oauth2/v3/userinfo",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }),
      keepUnusedDataFor: 0,
    }),
  }),
  overrideExisting: true,
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useForgotPasswordMutation,
  useVerifyCodeMutation,
  useResendOtpMutation,
  useResetPasswordMutation,
  useChangePasswordMutation,
  useLogoutMutation,
  useSocialLoginMutation,
  useGetGoogleUserInfoQuery,
  useVerifyCodeForgotPasswordMutation,
} = authApi;
