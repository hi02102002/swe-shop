import Loader from 'components/Loader';
import RequireAuth from 'components/RequireAuth';
import Toast from 'components/Toast';
import { authSelector } from 'features/auth';
import { cartAction } from 'features/cart';
import { useAppDispatch, useAppSelector } from 'hooks';
import React, { Suspense, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

// products.forEach((item) => {
//    const addItem = async (item: any) => {
//       await axios.post(
//          'https://6223ad753af069a0f9a7e199.mockapi.io/api/products',
//          {
//             ...item,
//          }
//       );
//    };
//    addItem(item);
// });

const Home = React.lazy(() => import('pages/Home')); // Lazy-loaded
const Products = React.lazy(() => import('pages/Products')); // Lazy-loaded
const Auth = React.lazy(() => import('pages/Auth')); // Lazy-loaded
const DetailProduct = React.lazy(() => import('pages/DetailProduct')); // Lazy-loaded
const ShoppingCart = React.lazy(() => import('pages/ShopingCart')); // Lazy-loaded
const Wishlist = React.lazy(() => import('pages/Wishlist')); // Lazy-loaded

const App = () => {
   const { currentUser } = useAppSelector(authSelector);
   const dispatch = useAppDispatch();

   useEffect(() => {
      if (currentUser) {
         dispatch(cartAction.getAllCarts(currentUser.uid));
      }
   }, [currentUser, dispatch]);

   return (
      <>
         <Toast bottom="1.5rem" left="1.5rem" />
         <Routes>
            <Route
               path="/"
               element={
                  <Suspense fallback={<Loader />}>
                     <Home />
                  </Suspense>
               }
            />
            <Route
               path="/auth"
               element={
                  <Suspense fallback={<Loader />}>
                     <Auth />
                  </Suspense>
               }
            />
            <Route
               path="/products"
               element={
                  <Suspense fallback={<Loader />}>
                     <Products />
                  </Suspense>
               }
            />

            <Route
               path="/products/:productId"
               element={
                  <Suspense fallback={<Loader />}>
                     <DetailProduct />
                  </Suspense>
               }
            />
            <Route
               path="/view-cart"
               element={
                  <Suspense fallback={<Loader />}>
                     <ShoppingCart />
                  </Suspense>
               }
            />
            <Route
               path="/wishlist"
               element={
                  <Suspense fallback={<Loader />}>
                     <RequireAuth>
                        <Wishlist />
                     </RequireAuth>
                  </Suspense>
               }
            />
         </Routes>
      </>
   );
};

export default App;
