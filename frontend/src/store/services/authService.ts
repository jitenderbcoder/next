import { GenericApi } from "../../api/genricApi";
import Endpoints from "../../constants/Endpoints";
import { setLogout, setToken, setUser } from "../slice/authSlice";

const onGoogleAuthStarted = async (
  _: any,
  { dispatch, queryFulfilled }: any
) => {
  try {
    const { data } = await queryFulfilled;
    console.log(data, ":>data9ioji9j");
    if (data) {
      dispatch(setToken(data.token));
      dispatch(
        setUser({
          accessToken: data?.token,
          user: data.user,
        })
      );
    }
  } catch (error) {
    console.error("Google authentication error:", error);
  }
};

export const authApi = GenericApi.injectEndpoints({
  endpoints: (builder) => ({
    googleAuth: builder.mutation<any, { access_token: string }>({
      query: ({ access_token }) => ({
        url: `/auth/google?access_token=${access_token}`,
        method: "GET",
      }),
      onQueryStarted: onGoogleAuthStarted,
    }),
    logout: builder.mutation({
      query: (id) => ({
        url: `auths/logout/${id}`,
        method: "PUT",
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          dispatch(setLogout());
          setTimeout(() => {
            dispatch(GenericApi.util.resetApiState());
          }, 1000);
        } catch (error) {}
      },
    }),
  }),
  overrideExisting: true,
});

export const { useGoogleAuthMutation, useLogoutMutation } = authApi;
