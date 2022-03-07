import { ProductItem } from 'shared/types';
import { request } from './axiosClient';
export const sweApi = {
   getAllProducts: (params?: any) => {
      return request.get<ProductItem[]>('products', {
         params,
      });
   },
};
