import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { request } from 'api/axiosClient';
import {
   createUserWithEmailAndPassword,
   getIdTokenResult,
   signInWithEmailAndPassword,
   updateProfile,
   UserInfo,
} from 'firebase/auth';
import { firebaseAuth } from 'services/firebaseApp';
import { RootState } from './../store';

export const handleLogin = createAsyncThunk<
   {
      user: UserInfo;
      accessToken: string;
   },
   { email: string; password: string; callback?: () => any }
>('auth/login', async ({ email, password, callback }) => {
   const { user } = await signInWithEmailAndPassword(
      firebaseAuth,
      email,
      password
   );

   callback && callback();

   const accessToken = (await getIdTokenResult(user)).token;

   return {
      user: {
         displayName: user.displayName,
         email: user.email,
         photoURL: user.photoURL,
         uid: user.uid,
         phoneNumber: user.phoneNumber,
         providerId: user.providerId,
      },
      accessToken,
   };
});

export const handleRegister = createAsyncThunk<
   {
      user: UserInfo;
      accessToken: string;
   },
   {
      email: string;
      password: string;
      firstName: string;
      lastName: string;
      callback?: () => any;
   }
>(
   'auth/register',
   async ({ email, password, callback, firstName, lastName }) => {
      const { user } = await createUserWithEmailAndPassword(
         firebaseAuth,
         email,
         password
      );

      await updateProfile(user, {
         displayName: `${firstName} ${lastName}`,
      });

      callback && callback();

      await request.post('user', {
         createdAt: new Date().toISOString(),
         displayName: user.displayName,
         avatar: user.photoURL,
         id: user.uid,
         email: user.email,
      });

      const accessToken = (await getIdTokenResult(user)).token;

      return {
         user: {
            displayName: user.displayName,
            email: user.email,
            photoURL: user.photoURL,
            uid: user.uid,
            phoneNumber: user.phoneNumber,
            providerId: user.providerId,
         },
         accessToken,
      };
   }
);

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
};

const authSlice = createSlice({
   name: 'auth',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(handleLogin.pending, (state) => {
            state.login.loading = true;
         })
         .addCase(
            handleLogin.fulfilled,
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
         .addCase(handleLogin.rejected, (state, action) => {
            state.login.error = action.error.code;
            state.login.loading = false;
         })
         .addCase(handleRegister.pending, (state) => {
            state.register.loading = true;
         })
         .addCase(handleRegister.fulfilled, (state, action) => {
            state.currentUser = action.payload.user;
            state.accessToken = action.payload.accessToken;
            state.register.loading = true;
         })
         .addCase(handleRegister.rejected, (state, action) => {
            state.register.error = action.error.code;
            state.register.loading = false;
         });
   },
});

// export const {} = authSlice.actions;
export const authSelector = (state: RootState) => state.auth;
export default authSlice.reducer;
