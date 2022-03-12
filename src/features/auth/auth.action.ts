import { createAsyncThunk } from '@reduxjs/toolkit';
import { request } from 'api/axiosClient';
import {
   createUserWithEmailAndPassword,
   getIdTokenResult,
   signInWithEmailAndPassword,
   signOut,
   updateProfile,
   UserInfo,
} from 'firebase/auth';
import { firebaseAuth } from 'services/firebaseApp';
import { RootState } from 'store';

export const authAction = {
   handleLogin: createAsyncThunk<
      {
         user: UserInfo;
         accessToken: string;
      },
      { email: string; password: string }
   >('auth/login', async ({ email, password }, thunkApi) => {
      const { user } = await signInWithEmailAndPassword(
         firebaseAuth,
         email,
         password
      );

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
   }),
   handleRegister: createAsyncThunk<
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
            userId: user.uid,
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
   ),
   handleLogout: createAsyncThunk<
      any,
      any,
      {
         state: RootState;
      }
   >('auth/handleLogout', async (_) => {
      await signOut(firebaseAuth);
   }),
};
