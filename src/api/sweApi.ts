import { CartItem, ProductItem, ReviewItem } from 'shared/types';
import { WishlistItem } from './../shared/types';
import { request } from './axiosClient';

const BASE_URL_2 = 'https://622defcb8d943bae348a7262.mockapi.io/api/';

export const sweApi = {
   getAllProducts: (params?: any) => {
      return request.get<ProductItem[]>('products', {
         params,
      });
   },
   getProduct: (id: string) => {
      return request.get<ProductItem>(`products/${id}`);
   },
   getAllCarts: (userId: string) => {
      return request.get<CartItem[]>('carts', {
         params: {
            userId,
         },
      });
   },
   addToCart: (data: CartItem) => {
      return request.post<CartItem>('carts', {
         ...data,
      });
   },
   updateCart: (data: CartItem) => {
      return request.put<CartItem>(`carts/${data.id}`, {
         ...data,
      });
   },
   removeCartItem: (id: string) => {
      return request.delete(`carts/${id}`);
   },
   getAllWishList: (userId: string) => {
      return request.get<WishlistItem[]>('wishlist');
   },
   getAllReviews: (productId: string) => {
      return request.get<ReviewItem[]>('comments', {
         baseURL: BASE_URL_2,
         params: {
            productId,
         },
      });
   },

   addReview: (review: ReviewItem) => {
      return request.post<ReviewItem>(
         'comments',
         {
            ...review,
         },
         {
            baseURL: BASE_URL_2,
         }
      );
   },
};
