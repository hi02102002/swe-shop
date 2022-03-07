import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { sweApi } from 'api/sweApi';
import { ProductItem } from 'shared/types';
import { RootState } from './../store';

export const getAllProducts = createAsyncThunk(
   'products/getAllProducts',
   async () => {
      const { data } = await sweApi.getAllProducts();
      return data;
   }
);

const initialState: {
   loading: boolean;
   error: string | null | undefined;
   products: ProductItem[];
} = {
   loading: false,
   error: null,
   products: [],
};

const productsSlice = createSlice({
   name: 'products',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(getAllProducts.pending, (state) => {
            state.loading = true;
         })
         .addCase(getAllProducts.fulfilled, (state, action) => {
            state.products = action.payload;
            state.loading = false;
         })
         .addCase(getAllProducts.rejected, (state, action) => {
            state.error = action.error.message;
            state.loading = false;
         });
   },
});

// export const {} = productsSlice.actions;
export const productsSelector = (state: RootState) => state.products;
export default productsSlice.reducer;
