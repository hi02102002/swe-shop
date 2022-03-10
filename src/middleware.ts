import { Middleware } from '@reduxjs/toolkit';

export const middleware: Middleware = (storeApi) => (next) => (action) => {
   if (action.type === 'auth/login/fulfilled') {
      // const currentUser = storeApi.getState().auth.currentUser;
      //   storeApi.dispatch(getAllCarts(currentUser.id));
   }
   return next(action);
};
