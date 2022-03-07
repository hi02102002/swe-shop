import { getAllProducts, productsSelector } from 'features/productsSlice';
import { useAppDispatch, useAppSelector } from 'hooks';
import React, { useEffect } from 'react';
import Product from '../Product';
import { StyledListProducts } from './styles';

const ListProducts: React.FC = () => {
   const dispatch = useAppDispatch();
   const { products, loading, error } = useAppSelector(productsSelector);

   useEffect(() => {
      dispatch(getAllProducts());
   }, [dispatch]);

   return (
      <StyledListProducts>
         {products.map((product) => {
            return (
               <li key={product.id}>
                  <Product product={product} />
               </li>
            );
         })}
      </StyledListProducts>
   );
};

export default ListProducts;
