import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { authReducer } from 'features/auth';
import { cartReducer } from 'features/cart';
import productsSlice from 'features/productsSlice';
import toastSlide from 'features/toastSlide';
import { middleware } from 'middleware';
import {
   FLUSH,
   PAUSE,
   PERSIST,
   persistReducer,
   persistStore,
   PURGE,
   REGISTER,
   REHYDRATE,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const rootPersistConfig = {
   key: 'root',
   storage,
   blacklist: ['auth', 'products', 'carts', 'toast'],
};

const authPersistConfig = {
   key: 'auth',
   storage: storage,
   blacklist: ['login', 'register'],
};

const rootReducer = combineReducers({
   auth: persistReducer(authPersistConfig, authReducer),
   products: productsSlice,
   carts: cartReducer,
   toast: toastSlide,
});

const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

export const store = configureStore({
   reducer: persistedReducer,
   middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
         serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
         },
         immutableCheck: false,
      }).concat(middleware),
});
export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
