import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { sweApi } from 'api/sweApi';
import { ProductItem } from 'shared/types';
import { RootState } from './../store';

export const getAllProducts = createAsyncThunk<ProductItem[], any | undefined>(
   'products/getAllProducts',

   async (params) => {
      const { data } = await sweApi.getAllProducts(params);
      return data;
   }
);

export const updateWishlist = createAsyncThunk<
   ProductItem,
   { product: ProductItem }
>('products/updateWishlist', async ({ product }) => {
   const { data } = await sweApi.updateWishlist(product.id, product);
   return data;
});

const initialState: {
   loading: boolean;
   error: string | null | undefined;
   products: ProductItem[];
   filter: ProductItem[];
} = {
   loading: false,
   error: null,
   products: [],
   filter: [],
};

const productsSlice = createSlice({
   name: 'products',
   initialState,
   reducers: {
      unmountProducts: (state) => {
         state.error = null;
         state.loading = false;
         state.products = [];
      },
      filterHeader: (state, action) => {
         if (action.payload === 'a-z') {
            state.filter = [...state.products].sort((a, b) =>
               a.name.localeCompare(b.name)
            );
         } else if (action.payload === 'z-a') {
            state.filter = [...state.products].sort((a, b) =>
               b.name.localeCompare(a.name)
            );
         } else if (action.payload === 'price-low-to-high') {
            state.filter = [...state.products].sort((a, b) => {
               return a.price - b.price;
            });
         } else if (action.payload === 'price-high-to-low') {
            state.filter = [...state.products].sort((a, b) => {
               return b.price - a.price;
            });
         } else if (action.payload === 'features') {
            state.filter = state.products;
         }
      },
      filterSidebar: (state, action) => {
         if (
            action.payload.types.length === 0 &&
            action.payload.size.length === 0 &&
            action.payload.color.length === 0
         ) {
            state.filter = state.products;
         }
         // if (action.payload.size.length > 0) {
         //    state.filter = [...state.products].filter((product) => {
         //       const check = product.size.find((item) =>
         //          action.payload.size.includes(item)
         //       );
         //       return check !== undefined;
         //    });
         // }
         // if (action.payload.types.length > 0) {
         //    state.filter = [...state.products].filter((product) => {
         //       const check = product.types.find((item) =>
         //          action.payload.types.includes(item)
         //       );
         //       return check !== undefined;
         //    });
         // }

         // if (action.payload.color.length > 0) {
         //    state.filter = [...state.products].filter((product) => {
         //       return action.payload.color.includes(product.color);
         //    });
         // }
         // state.filter = [...state.products].filter((product) => {
         //    const checkSize = product.size.find((item) =>
         //       action.payload.size.includes(item)
         //    );
         //    const checkTypes = product.types.find((item) =>
         //       action.payload.types.includes(item)
         //    );
         //    const checkColor = action.payload.color.includes(product.color);

         //    return checkSize || checkColor || checkTypes;
         // });
      },
   },
   extraReducers: (builder) => {
      builder
         .addCase(getAllProducts.pending, (state) => {
            state.loading = true;
         })
         .addCase(getAllProducts.fulfilled, (state, action) => {
            state.products = action.payload;
            state.filter = action.payload;
            state.loading = false;
         })
         .addCase(getAllProducts.rejected, (state, action) => {
            state.error = action.error.message;
            state.loading = false;
         })
         .addCase(updateWishlist.fulfilled, (state, action) => {
            const indexExistFilter = state.products.findIndex(
               (item) => item.id === action.payload.id
            );
            if (state.filter[indexExistFilter]) {
               state.filter[indexExistFilter] = action.payload;
            }
         });
   },
});

export const { unmountProducts, filterHeader, filterSidebar } =
   productsSlice.actions;
export const productsSelector = (state: RootState) => state.products;
export default productsSlice.reducer;
