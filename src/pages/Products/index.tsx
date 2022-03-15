import Hero from 'components/Hero';
import Layout from 'components/Layout';
import ListProducts from 'components/ListProducts';
import Loader from 'components/Loader';
import { getAllProducts, productsSelector } from 'features/productsSlice';
import { useAppDispatch, useAppSelector } from 'hooks';
import React, { useEffect, useState } from 'react';
import FilterHeader from './components/FilterHeader';
import { StyledProducts } from './styles';

const Products = () => {
   const dispatch = useAppDispatch();
   const { filter, loading } = useAppSelector(productsSelector);
   const [col, setCol] = useState<number>(4);

   useEffect(() => {
      dispatch(getAllProducts(undefined));
   }, [dispatch]);

   useEffect(() => {
      document.title = 'SWE - PRODUCTS';
   }, []);

   return loading ? (
      <Loader />
   ) : (
      <Layout>
         <Hero content="Products" path="Products" />
         <StyledProducts>
            <div className="container">
               <FilterHeader
                  setCol={(col) => {
                     setCol(col);
                  }}
                  col={col}
               />
               <ListProducts products={filter} type="product" col={col} />
            </div>
         </StyledProducts>
      </Layout>
   );
};

export default Products;
