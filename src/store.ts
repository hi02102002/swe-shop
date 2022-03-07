import { combineReducers, configureStore } from '@reduxjs/toolkit';
import authSlice from 'features/authSlice';
import productsSlice from 'features/productsSlice';
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
   blacklist: ['auth', 'products'],
};

const authPersistConfig = {
   key: 'auth',
   storage: storage,
   blacklist: ['login', 'register'],
};

const rootReducer = combineReducers({
   auth: persistReducer(authPersistConfig, authSlice),
   products: productsSlice,
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
      }),
});
export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
