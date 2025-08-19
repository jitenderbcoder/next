// redux/slice/authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  isAuthenticated: false,
  isNewUser: false,
  // Remove: token, accessToken - no longer needed
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload.user;
      state.isAuthenticated = true;
      state.isNewUser = action.payload.isNewUser || false;
    },
    
    setLogout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.isNewUser = false;
    },

    // Optional: Clear new user flag after welcome message
    clearNewUserFlag: (state) => {
      state.isNewUser = false;
    },

  },
});

export const { setUser, setLogout, clearNewUserFlag } = authSlice.actions;
export default authSlice;