import Hero from 'components/Hero';
import Layout from 'components/Layout';
import React from 'react';
import { StyledWishlist } from './Wishlist.styles';

const Wishlist = () => {
   return (
      <Layout>
         <Hero path="Wishlist" content="Wishlist" />
         <StyledWishlist>
            <div className="container"></div>
         </StyledWishlist>
      </Layout>
   );
};

export default Wishlist;
