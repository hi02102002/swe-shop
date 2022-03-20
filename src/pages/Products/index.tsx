import Box from 'components/Box';
import Hero from 'components/Hero';
import Layout from 'components/Layout';
import ListProducts from 'components/ListProducts';
import Loader from 'components/Loader';
import { getAllProducts, productsSelector } from 'features/productsSlice';
import { useAppDispatch, useAppSelector } from 'hooks';
import React, { useEffect, useState } from 'react';
import FilterHeader from './components/FilterHeader';
import FilterSidebar from './components/FilterSidebar';
import { StyledProducts } from './styles';

const Products = () => {
   const dispatch = useAppDispatch();
   const { filter, loading } = useAppSelector(productsSelector);
   const [col, setCol] = useState<number>(4);
   const [filterResult, setFilterResult] = useState<any>({
      size: [],
      types: [],
      color: [],
   });

   useEffect(() => {
      document.title = 'SWE - PRODUCTS';
   }, []);

   useEffect(() => {
      dispatch(getAllProducts(filterResult));
   }, [dispatch, filterResult]);

   return loading ? (
      <Loader />
   ) : (
      <Layout>
         <Hero content="Products" path="Products" />
         <StyledProducts>
            <div className="container">
               <FilterSidebar
                  filterResult={filterResult}
                  setFilterResult={setFilterResult}
               />
               <Box>
                  <FilterHeader
                     setCol={(col) => {
                        setCol(col);
                     }}
                     col={col}
                  />
                  {filter.length > 0 ? (
                     <ListProducts products={filter} type="product" col={col} />
                  ) : (
                     <h6>Sorry, there are no products in this collection</h6>
                  )}
               </Box>
            </div>
         </StyledProducts>
      </Layout>
   );
};

export default React.memo(Products);
