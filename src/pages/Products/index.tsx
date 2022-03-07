import Layout from 'components/Layout';
import { getAllProducts, productsSelector } from 'features/productsSlice';
import { useAppDispatch, useAppSelector } from 'hooks';
import React, { useEffect } from 'react';

const Products = () => {
   const dispatch = useAppDispatch();
   const { products } = useAppSelector(productsSelector);

   console.log(products);

   useEffect(() => {
      dispatch(getAllProducts());
   }, [dispatch]);
   return (
      <Layout>
         <div className="container"></div>
      </Layout>
   );
};

export default Products;
