import { createSlice } from '@reduxjs/toolkit';
import { WishlistItem } from 'shared/types';
import { RootState } from './../../store';
import { wishlistAction } from './wishlist.action';

const initialState: {
   wishlist: WishlistItem[];
   loading: boolean;
   error: string | null | undefined;
   add: {
      loading: boolean;
      error: string | null | undefined;
   };
   remove: {
      loading: boolean;
      error: string | null | undefined;
   };
} = {
   wishlist: [],
   loading: false,
   error: null,
   add: {
      loading: false,
      error: null,
   },
   remove: {
      loading: false,
      error: null,
   },
};

const wishlistSlice = createSlice({
   name: 'wishlist',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(wishlistAction.getAllWishlist.pending, (state) => {
            state.loading = true;
         })
         .addCase(wishlistAction.getAllWishlist.fulfilled, (state, action) => {
            state.loading = false;
            state.wishlist = action.payload;
         })
         .addCase(wishlistAction.getAllWishlist.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
         })
         .addCase(wishlistAction.addWishlist.pending, (state) => {
            state.add.loading = true;
         })
         .addCase(wishlistAction.addWishlist.fulfilled, (state, action) => {
            state.add.loading = false;
            const wishlistIndexExist = state.wishlist.findIndex(
               (item) => item.id === action.payload.id
            );
            if (!state.wishlist[wishlistIndexExist]) {
               state.wishlist.push(action.payload);
            }
         })
         .addCase(wishlistAction.addWishlist.rejected, (state, action) => {
            state.add.error = action.error.message;
            state.add.loading = false;
         })
         .addCase(wishlistAction.removeWishlist.fulfilled, (state, action) => {
            state.wishlist = state.wishlist.filter(
               (item) => item.id !== action.payload.id
            );
         });
   },
});
export const wishlistSelector = (state: RootState) => state.wishlist;
export const wishlistReducer = wishlistSlice.reducer;
