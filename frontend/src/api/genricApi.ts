import {
  createApi,
  fetchBaseQuery,
  type BaseQueryApi,
} from "@reduxjs/toolkit/query/react";
import { setLogout } from "../store/slice/authSlice";
import Constants from "../constants/Constants";

type AuthState = {
  auth: {
    token: string;
  };
};

const baseQuery = fetchBaseQuery({
  baseUrl: Constants.HOST + Constants.API_VERSION,
  prepareHeaders: (
    headers: Headers,
    api: Pick<
      BaseQueryApi,
      "getState" | "endpoint" | "extra" | "type" | "forced"
    >
  ): Headers => {
    const token = (api.getState() as AuthState).auth.token;
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
      headers.set("timezone", Intl.DateTimeFormat().resolvedOptions().timeZone);
    }
    return headers;
  },
  timeout: 40000,
});

const baseQueryInterceptor = async (args: any, api: any, options: any) => {
  const result = await baseQuery(args, api, options);
  if (result.error?.status == 403 || result.error?.status == 401) {
    api.dispatch(setLogout());
  }
  if ((result?.data as { isSuccess: boolean })?.isSuccess) {
    // toster.success((result.data as { message: string }).message);
  } else if (result?.error?.data) {
    // toast.error((result.error?.data as { message: string }).message);
  } else {
    // toast.error((result.data as { message: string }).message);
  }
  return result;
};

export const GenericApi = createApi({
  reducerPath: "api",
  baseQuery: baseQueryInterceptor,
  endpoints: () => ({}),
  tagTypes: ["Auth", "user", "categories", "challenges", "wallet"],
});
