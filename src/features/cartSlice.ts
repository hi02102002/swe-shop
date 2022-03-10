import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { sweApi } from 'api/sweApi';
import { CartItem } from 'shared/types';
import { RootState } from './../store';

export const getAllCarts = createAsyncThunk(
   'carts/getAllCarts',
   async (userId: string) => {
      const { data } = await sweApi.getAllCarts(userId);
      return data;
   }
);

// export const addToCart = createAsyncThunk<
//    CartItem,
//    {
//       data: CartItem;
//    },
//    {
//       state: RootState;
//    }
// >('carts/addToCart', async ({ data }, { getState }) => {
//    const indexExist = getState().carts.carts.findIndex(
//       (cart) => cart.productId === data.productId
//    );

//    const cartExist = getState().carts.carts[indexExist];

//    if (cartExist) {
//       const { data: dataCart } = await sweApi.updateCart({
//          ...data,
//          amount: cartExist.amount + 1,
//          id: cartExist.id,
//       });
//       return dataCart;
//    }
//    const { data: dataCart } = await sweApi.addToCart(data);
//    return dataCart;
// });

export const removeCartItemAsync = createAsyncThunk(
   'carts/removeCartItem',
   async (id: string, thunkApi) => {
      // thunkApi.dispatch(removeCartItem(id));
      await sweApi.removeCartItem(id);
      return id;
   }
);

const initialState: {
   carts: CartItem[];
   loading: boolean;
   error: null | string | undefined;
} = {
   carts: [],
   loading: false,
   error: null,
};

const cartSlice = createSlice({
   name: 'cart',
   initialState,
   reducers: {
      addToCart: (state, action: PayloadAction<CartItem>) => {
         const indexExist = state.carts.findIndex(
            (cart) =>
               cart.productId === action.payload.productId &&
               cart.size === action.payload.size
         );

         const cartExist = state.carts[indexExist];
         if (cartExist) {
            state.carts[indexExist] = {
               ...cartExist,
               amount: cartExist.amount + action.payload.amount,
            };
         } else {
            state.carts.unshift(action.payload);
         }
      },
      removeCartItem: (
         state,
         action: PayloadAction<{
            productId: string;
            size: string;
         }>
      ) => {
         state.carts = state.carts.filter(
            (cart) =>
               cart.productId !== action.payload.productId ||
               cart.size !== action.payload.size
         );
      },
      removeAllCartItem: (state) => {
         state.carts = [];
      },
      updateAmountCartItem: (
         state,
         action: PayloadAction<{
            productId: string;
            size: string;
            amount: number;
         }>
      ) => {
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
      },
   },
   extraReducers: (builder) => {
      builder
         .addCase(getAllCarts.pending, (state) => {
            state.loading = true;
         })
         .addCase(
            getAllCarts.fulfilled,
            (state, action: PayloadAction<CartItem[]>) => {
               state.carts = action.payload;
               state.loading = false;
            }
         )
         .addCase(getAllCarts.rejected, (state, action) => {
            state.error = action.error.message;
            state.loading = false;
         })
         // .addCase(addToCart.fulfilled, (state, action) => {
         //    const indexExist = state.carts.findIndex(
         //       (cart) => action.payload.id === cart.id
         //    );
         //    if (state.carts[indexExist]) {
         //       state.carts[indexExist] = {
         //          ...state.carts[indexExist],
         //          ...action.payload,
         //       };
         //    } else {
         //       state.carts.push(action.payload);
         //    }
         // })
         .addCase(removeCartItemAsync.fulfilled, (state, action) => {
            state.carts = state.carts.filter(
               (cart) => cart.id !== action.payload
            );
         });
   },
});

export const {
   removeCartItem,
   addToCart,
   updateAmountCartItem,
   removeAllCartItem,
} = cartSlice.actions;
export const cartsSelector = (state: RootState) => state.carts;
export default cartSlice.reducer;
