import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface AuthState {
  user: {
    userId: string;
    email: string | null;
    photoURL: string | null;
  } | null;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  user: null,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signInStart: state => {
      state.loading = true;
      state.error = null;
    },
    signInSuccess: (state, action: PayloadAction<AuthState['user']>) => {
      state.user = action.payload;
      state.loading = false;
    },
    signInFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
    signOut: state => {
      state.user = null;
    },
  },
});

export const {signInStart, signInSuccess, signInFailure, signOut} =
  authSlice.actions;

export default authSlice.reducer;
