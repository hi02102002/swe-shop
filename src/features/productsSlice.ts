import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { request } from 'api/axiosClient';
import { RootState } from './../store';

export const getAllProducts = createAsyncThunk(
   'products/getAllProducts',
   async () => {
      const { data } = await request.get('products');
      return data;
   }
);

const initialState: {
   loading: boolean;
   error: string | null | undefined;
   products: any;
   filters: {
      sizes: string[];
      types: string[];
      colors: string[];
   };
} = {
   loading: false,
   error: null,
   products: [],
   filters: {
      sizes: [],
      colors: [],
      types: [],
   },
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
