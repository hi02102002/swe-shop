import Hero from 'components/Hero';
import Layout from 'components/Layout';
import React from 'react';
import ListProducts from './components/ListProducts';
import { StyledProducts } from './styles';

const Products = () => {
   return (
      <Layout>
         <StyledProducts>
            <Hero content="Products" />
            <div className="container">
               <ListProducts />
            </div>
         </StyledProducts>
      </Layout>
   );
};

export default Products;
