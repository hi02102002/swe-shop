import Hero from 'components/Hero';
import Layout from 'components/Layout';
import ListProducts from 'components/ListProducts';
import Loader from 'components/Loader';
import { wishlistSelector } from 'features/wishlist';
import { useAppSelector } from 'hooks';
import React, { useEffect } from 'react';
import { StyledWishlist } from './Wishlist.styles';

const Wishlist = () => {
   const { wishlist, loading } = useAppSelector(wishlistSelector);

   useEffect(() => {
      document.title = 'SWE - WISHLIST';
   }, []);

   return loading ? (
      <Loader />
   ) : (
      <Layout>
         <Hero path="Wishlist" content="Wishlist" />
         <StyledWishlist>
            <div className="container">
               {wishlist.length > 0 ? (
                  <ListProducts products={wishlist} type="wishlist" />
               ) : (
                  <h5>There are no products in your wishlist!</h5>
               )}
            </div>
         </StyledWishlist>
      </Layout>
   );
};

export default Wishlist;
