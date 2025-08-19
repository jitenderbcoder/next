import { GenericApi } from "../../api/genricApi";
import Endpoints from "../../constants/Endpoints";
import { setLogout, setUser } from "../slice/authSlice"; // Remove setToken import

const onGoogleAuthStarted = async (
  _: any,
  { dispatch, queryFulfilled }: any
) => {
  try {
    const { data } = await queryFulfilled;
    console.log(data, ":>data9ioji9j");

    if (data && data.success) {
      // No more token handling - cookies are set automatically
      dispatch(
        setUser({
          user: data.user,
          isNewUser: data.isNewUser, // New field from backend
          isAuthenticated: true,
        })
      );

      // Optional: Show welcome message for new users
      if (data.isNewUser) {
        console.log("Welcome! Account created successfully");
      } else {
        console.log("Welcome back!");
      }
    }
  } catch (error) {
    console.error("Google authentication error:", error);
  }
};

const onLogoutStarted = async (_: any, { dispatch, queryFulfilled }: any) => {
  try {
    await queryFulfilled;
    dispatch(setLogout());
    setTimeout(() => {
      dispatch(GenericApi.util.resetApiState());
    }, 1000);
  } catch (error) {
    console.error("Logout error:", error);
  }
};

export const authApi = GenericApi.injectEndpoints({
  endpoints: (builder) => ({
    googleAuth: builder.mutation<any, { access_token: string }>({
      query: ({ access_token }) => ({
        url: `/auth/google?access_token=${access_token}`,
        method: "GET", // Keep as GET since your backend expects query params
      }),
      onQueryStarted: onGoogleAuthStarted,
      invalidatesTags: ["Auth"],
    }),

    logout: builder.mutation<{ success: boolean; message: string }, void>({
      query: () => ({
        url: "auth/google/logout",
        method: "POST",
      }),
      onQueryStarted: onLogoutStarted,
      invalidatesTags: ["Auth"],
    }),

    // New endpoint to check authentication status
    checkAuth: builder.query<{ success: boolean; user: any }, void>({
      query: () => ({
        url: "auth/check",
        method: "GET",
      }),
      providesTags: ["Auth"],
    }),
  }),
  overrideExisting: true,
});

export const {
  useGoogleAuthMutation,
  useLogoutMutation,
  useCheckAuthQuery,
  useLazyCheckAuthQuery,
} = authApi;
