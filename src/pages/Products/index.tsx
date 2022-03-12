import Hero from 'components/Hero';
import Layout from 'components/Layout';
import ListProducts from 'components/ListProducts';
import Loader from 'components/Loader';
import { getAllProducts, productsSelector } from 'features/productsSlice';
import { useAppDispatch, useAppSelector } from 'hooks';
import React, { useEffect } from 'react';
import { StyledProducts } from './styles';

const Products = () => {
   const dispatch = useAppDispatch();
   const { products, loading } = useAppSelector(productsSelector);

   useEffect(() => {
      dispatch(getAllProducts());
   }, [dispatch]);

   useEffect(() => {
      document.title = 'SWE - PRODUCTS';
   }, []);

   return loading ? (
      <Loader />
   ) : (
      <Layout>
         <StyledProducts>
            <Hero content="Products" path="Products" />
            <div className="container">
               <ListProducts products={products} type="product" />
            </div>
         </StyledProducts>
      </Layout>
   );
};

export default Products;
