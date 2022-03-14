import { createSlice } from '@reduxjs/toolkit';
import { WishlistItem } from 'shared/types';

const initialState: {
   wishlist: WishlistItem[];
   loading: boolean;
   error: string | null | undefined;
} = {
   wishlist: [],
   loading: false,
   error: null,
};

const wishlistSlice = createSlice({
   name: 'wishlist',
   initialState,
   reducers: {},
});

export default wishlistSlice.reducer;
