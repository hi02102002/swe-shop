import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { sweApi } from 'api/sweApi';
import { CartItem } from 'shared/types';
import { RootState } from './../../store';
export const cartAction = {
   getAllCarts: createAsyncThunk(
      'carts/getAllCarts',
      async (userId: string) => {
         const { data } = await sweApi.getAllCarts(userId);
         return data;
      }
   ),
   addToCart: createAsyncThunk<
      CartItem,
      CartItem,
      {
         state: RootState;
      }
   >('carts/addToCart', async (cartItem, { getState }) => {
      const indexExist = getState().carts.carts.findIndex(
         (cart) =>
            cart.productId === cartItem.productId && cartItem.size === cart.size
      );

      const cartExist = getState().carts.carts[indexExist];

      if (cartExist) {
         const { data: dataCart } = await sweApi.updateCart({
            ...cartItem,
            amount: cartExist.amount + cartItem.amount,
            id: cartExist.id,
         });
         return dataCart;
      }
      const { data: dataCart } = await sweApi.addToCart(cartItem);
      return dataCart;
   }),
   removeCartItem: createAsyncThunk<
      any,
      {
         productId: string;
         size: string;
      },
      {
         state: RootState;
      }
   >('carts/removeCartItem', async ({ productId, size }, { getState }) => {
      const cartExist = getState().carts.carts.find(
         (cart) => cart.productId === productId && size === cart.size
      );
      await sweApi.removeCartItem(cartExist?.id as string);
      return {
         productId,
         size,
      };
   }),
   updateAmountCartItem: createAsyncThunk<
      {
         productId: string;
         size: string;
         amount: number;
      },
      {
         productId: string;
         size: string;
         amount: number;
      },
      {
         state: RootState;
      }
   >(
      'carts/updateAmountCartItem',
      async ({ amount, productId, size }, { getState }) => {
         const cartExist = getState().carts.carts.find(
            (cart) => cart.productId === productId && size === cart.size
         );
         if (cartExist) {
            await sweApi.updateCart({
               ...cartExist,
               amount: amount,
               id: cartExist.id,
            });
         }
         return {
            amount,
            productId,
            size,
         };
      }
   ),
   removeAllCart: createAsyncThunk<
      any,
      any,
      {
         state: RootState;
      }
   >('carts/removeAllCart', async (_, { getState }) => {
      const carts = getState().carts.carts;
      for (const cart of carts) {
         await sweApi.removeCartItem(cart.id);
      }
   }),
   umountCart: createAction('carts/unmountCart'),
};
