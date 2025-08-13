import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import LocalStorage from "../../utils/LocalStorage";


interface AuthState {
  token?: string | null;
  user?: any | null;
}

const initialState: AuthState = {
  token: LocalStorage.getFromLocalStorage("accessToken")
    ? LocalStorage.getFromLocalStorage("accessToken")
    : null,
  user: LocalStorage.getFromLocalStorage("user")
    ? LocalStorage.getFromLocalStorage("user")
    : null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (state, { payload: token }) => ({ ...state, token: token }),
    setUser: (
      _state,
      action: PayloadAction<{
        accessToken?: any;
        user?: any;
      }>
    ) => {
      LocalStorage.setInLocalStorage("accessToken", action.payload.accessToken);
      LocalStorage.setInLocalStorage("user", action.payload.user);
      return {
        token: action.payload.accessToken,
        user: action.payload.user,
      };
    },
    setLogout: (state) => {
      LocalStorage.clearLocalStorage();
      state.token = null;
      state.user = null;
    },
  },
});

export const { setLogout, setUser, setToken } = authSlice.actions;

export default authSlice;
