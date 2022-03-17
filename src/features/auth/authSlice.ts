import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserInfo } from 'firebase/auth';
import { RootState } from '../../store';
import { authAction } from './auth.action';

interface InitializeState {
   currentUser: UserInfo | null;
   accessToken: string | null;
   login: {
      loading: boolean;
      error: null | undefined | string;
   };
   register: {
      loading: boolean;
      error: null | undefined | string;
   };
   logout: {
      loading: boolean;
      error: null | undefined | string;
   };
}

const initialState: InitializeState = {
   currentUser: null,
   accessToken: null,
   login: {
      loading: false,
      error: null,
   },
   register: {
      loading: false,
      error: null,
   },
   logout: {
      loading: false,
      error: null,
   },
};

const authSlice = createSlice({
   name: 'auth',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(authAction.handleLogin.pending, (state) => {
            state.login.loading = true;
         })
         .addCase(
            authAction.handleLogin.fulfilled,
            (
               state,
               action: PayloadAction<{
                  user: UserInfo;
                  accessToken: string;
               }>
            ) => {
               state.currentUser = action.payload.user;
               state.accessToken = action.payload.accessToken;
               state.login.loading = false;
            }
         )
         .addCase(authAction.handleLogin.rejected, (state, action) => {
            state.login.error = action.error.code;
            state.login.loading = false;
         })
         .addCase(authAction.handleRegister.pending, (state) => {
            state.register.loading = true;
         })
         .addCase(authAction.handleRegister.fulfilled, (state, action) => {
            state.currentUser = action.payload.user;
            state.accessToken = action.payload.accessToken;
            state.register.loading = false;
         })
         .addCase(authAction.handleRegister.rejected, (state, action) => {
            state.register.error = action.error.code;
            state.register.loading = false;
         })
         .addCase(authAction.handleLogout.pending, (state) => {
            state.logout.loading = true;
         })
         .addCase(authAction.handleLogout.fulfilled, (state) => {
            state.accessToken = null;
            state.currentUser = null;
            state.logout.loading = false;
         })
         .addCase(authAction.handleLogout.rejected, (state) => {
            state.logout.error = 'Something went wrong!';
            state.logout.loading = false;
         });
   },
});

export const authSelector = (state: RootState) => state.auth;
export const authReducer = authSlice.reducer;
