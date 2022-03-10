import Loader from 'components/Loader';
import Toast from 'components/Toast';
import React, { Suspense } from 'react';
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

const App = () => {
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
               path="/products"
               element={
                  <Suspense fallback={<Loader />}>
                     <Products />
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
         </Routes>
      </>
   );
};

export default App;
