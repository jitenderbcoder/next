// // redux/slice/authSlice.js
// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   user: null,
//   isAuthenticated: false,
//   isNewUser: false,
//   // Remove: token, accessToken - no longer needed
// };

// const authSlice = createSlice({
//   name: "auth",
//   initialState,
//   reducers: {
//     setUser: (state, action) => {
//       state.user = action.payload.user;
//       state.isAuthenticated = true;
//       state.isNewUser = action.payload.isNewUser || false;
//     },

//     setLogout: (state) => {
//       state.user = null;
//       state.isAuthenticated = false;
//       state.isNewUser = false;
//     },

//     // Optional: Clear new user flag after welcome message
//     clearNewUserFlag: (state) => {
//       state.isNewUser = false;
//     },
//   },
// });

// export const { setUser, setLogout, clearNewUserFlag } = authSlice.actions;
// export default authSlice;

import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import LocalStorage from "../../utils/LocalStorage";

interface AuthState {
  token?: string | null;
  user?: any | null;
  isAuthenticated?: any | null;
  isNewUser?: any | null;
}

const initialState: AuthState = {
  token: LocalStorage.getFromLocalStorage("accessToken")
    ? LocalStorage.getFromLocalStorage("accessToken")
    : null,
  user: LocalStorage.getFromLocalStorage("user")
    ? LocalStorage.getFromLocalStorage("user")
    : null,
  isAuthenticated: false,
  isNewUser: false,
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
        isAuthenticated?: any;
        isNewUser?: any;
      }>
    ) => {
      LocalStorage.setInLocalStorage("accessToken", action.payload.accessToken);
      LocalStorage.setInLocalStorage("user", action.payload.user);
      return {
        token: action.payload.accessToken,
        user: action.payload.user,
        isAuthenticated: (action.payload.isAuthenticated = true),
        isNewUser: action.payload.isNewUser || false,
      };
    },
    setLogout: (state) => {
      LocalStorage.clearLocalStorage();
      state.token = null;
      state.user = null;
      state.isAuthenticated = false;
      state.isNewUser = false;
    },
  },
});

export const { setLogout, setUser, setToken } = authSlice.actions;

export default authSlice;
