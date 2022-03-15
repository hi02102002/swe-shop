import Hero from 'components/Hero';
import Layout from 'components/Layout';
import ListProducts from 'components/ListProducts';
import { authSelector } from 'features/auth';
import { getAllProducts, productsSelector } from 'features/productsSlice';
import { useAppDispatch, useAppSelector } from 'hooks';
import React, { useEffect } from 'react';
import { StyledWishlist } from './Wishlist.styles';

const Wishlist = () => {
   const { currentUser } = useAppSelector(authSelector);
   const { products } = useAppSelector(productsSelector);
   const dispatch = useAppDispatch();

   useEffect(() => {
      const params = {
         isWishlist: true,
         userId: currentUser?.uid,
      };
      dispatch(getAllProducts(params));
   }, [dispatch, currentUser]);

   return (
      <Layout>
         <Hero path="Wishlist" content="Wishlist" />
         <StyledWishlist>
            <div className="container">
               <ListProducts products={products} type="wishlist" />
            </div>
         </StyledWishlist>
      </Layout>
   );
};

export default Wishlist;
