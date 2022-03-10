import { combineReducers, configureStore } from '@reduxjs/toolkit';
import authSlice from 'features/authSlice';
import cartSlice from 'features/cartSlice';
import productsSlice from 'features/productsSlice';
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
   blacklist: ['auth', 'products', 'carts'],
};

const authPersistConfig = {
   key: 'auth',
   storage: storage,
   blacklist: ['login', 'register'],
};

const cartsPersistConfig = {
   key: 'carts',
   storage: storage,
   blacklist: ['totalPrice', 'loading', 'error'],
};

const rootReducer = combineReducers({
   auth: persistReducer(authPersistConfig, authSlice),
   products: productsSlice,
   carts: persistReducer(cartsPersistConfig, cartSlice),
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
