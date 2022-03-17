import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartItem } from 'shared/types';
import { RootState } from '../../store';
import { cartAction } from './cart.action';

const initialState: {
   carts: CartItem[];
   error: null | string | undefined;
   loading: boolean;
   add: {
      loading: boolean;
      error: null | string | undefined;
   };
   remove: {
      loading: boolean;
      error: null | string | undefined;
   };
} = {
   carts: [],
   error: null,
   loading: false,
   add: {
      loading: false,
      error: null,
   },
   remove: {
      loading: false,
      error: null,
   },
};

const cartSlice = createSlice({
   name: 'cart',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(cartAction.getAllCarts.pending, (state) => {
            state.loading = true;
         })
         .addCase(
            cartAction.getAllCarts.fulfilled,
            (state, action: PayloadAction<CartItem[]>) => {
               state.carts = action.payload;
               state.loading = false;
            }
         )
         .addCase(cartAction.getAllCarts.rejected, (state, action) => {
            state.error = action.error.message;
            state.loading = false;
         })
         .addCase(cartAction.addToCart.pending, (state) => {
            state.add.loading = true;
         })
         .addCase(cartAction.addToCart.fulfilled, (state, action) => {
            state.add.loading = false;
            const indexExist = state.carts.findIndex(
               (cart) =>
                  cart.productId === action.payload.productId &&
                  cart.size === action.payload.size
            );

            const cartExist = state.carts[indexExist];
            if (cartExist) {
               state.carts[indexExist] = {
                  ...cartExist,
                  amount: action.payload.amount,
               };
            } else {
               state.carts.unshift(action.payload);
            }
         })
         .addCase(cartAction.removeCartItem.pending, (state) => {
            state.remove.loading = true;
         })
         .addCase(cartAction.removeCartItem.fulfilled, (state, action) => {
            state.carts = state.carts.filter(
               (cart) =>
                  cart.productId !== action.payload.productId ||
                  cart.size !== action.payload.size
            );
            state.remove.loading = false;
         })
         .addCase(
            cartAction.updateAmountCartItem.fulfilled,
            (state, action) => {
               const indexExist = state.carts.findIndex(
                  (cart) =>
                     cart.productId === action.payload.productId &&
                     cart.size === action.payload.size
               );

               const cartExist = state.carts[indexExist];

               state.carts[indexExist] = {
                  ...cartExist,
                  amount: action.payload.amount,
               };
            }
         )
         .addCase(cartAction.removeAllCart.pending, (state) => {
            state.remove.loading = true;
         })
         .addCase(cartAction.removeAllCart.fulfilled, (state) => {
            state.carts = [];
            state.remove.loading = false;
         })
         .addCase(cartAction.umountCart, (state) => {
            state.carts = [];
         });
   },
});

export const cartsSelector = (state: RootState) => state.carts;
export const cartReducer = cartSlice.reducer;
