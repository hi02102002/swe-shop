import { createAsyncThunk } from '@reduxjs/toolkit';
import { WishlistItem } from 'shared/types';
import { sweApi } from './../../api/sweApi';
import { RootState } from './../../store';
export const wishlistAction = {
   getAllWishlist: createAsyncThunk<
      WishlistItem[],
      {
         userId: string;
      }
   >('wishlist/getAllWishlist', async ({ userId }) => {
      const { data } = await sweApi.getAllWishList(userId);
      return data;
   }),
   addWishlist: createAsyncThunk<
      WishlistItem,
      WishlistItem,
      {
         state: RootState;
      }
   >('wishlist/addWishlist', async (wishlistItem, { getState }) => {
      const { data } = await sweApi.addWishlist(wishlistItem);
      return data;
   }),
   removeWishlist: createAsyncThunk<WishlistItem, string>(
      'wishlist/removeWishlist',
      async (wishlistId) => {
         const { data } = await sweApi.removeWishlist(wishlistId);
         return data;
      }
   ),
};
