import Product from 'components/Product';
import React from 'react';
import { ProductItem } from 'shared/types';
import { StyledListProducts } from './styles';

const ListProducts: React.FC<{
   products: ProductItem[];
   type?: 'product' | 'wishlist';
}> = ({ products, type }) => {
   return (
      <StyledListProducts>
         {products.map((product) => {
            return (
               <li key={product.id}>
                  <Product product={product} type={type} />
               </li>
            );
         })}
      </StyledListProducts>
   );
};

export default ListProducts;
