import { GenericApi } from "../../api/genricApi";
import Endpoints from "../../constants/Endpoints";
import { setToken, setUser } from "../slice/authSlice";
import { LoginResponse } from "../types/auth";

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

export const { useSocialLoginMutation, useGetGoogleUserInfoQuery } = authApi;
