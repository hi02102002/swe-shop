import { CartItem, ProductItem } from 'shared/types';
import { request } from './axiosClient';
export const sweApi = {
   getAllProducts: (params?: any) => {
      return request.get<ProductItem[]>('products', {
         params,
      });
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
};
