import Hero from 'components/Hero';
import Layout from 'components/Layout';
import ListProducts from 'components/ListProducts';
import { getAllProducts, productsSelector } from 'features/productsSlice';
import { useAppDispatch, useAppSelector } from 'hooks';
import React, { useEffect } from 'react';
import { StyledProducts } from './styles';

const Products = () => {
   const dispatch = useAppDispatch();
   const { products } = useAppSelector(productsSelector);

   useEffect(() => {
      dispatch(getAllProducts());
   }, [dispatch]);

   useEffect(() => {
      document.title = 'SWE - PRODUCTS';
   }, []);

   return (
      <Layout>
         <StyledProducts>
            <Hero content="Products" />
            <div className="container">
               <ListProducts products={products} type="product" />
            </div>
         </StyledProducts>
      </Layout>
   );
};

export default Products;
