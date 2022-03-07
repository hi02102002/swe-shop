import Loader from 'components/Loader';
import Auth from 'pages/Auth';
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

const App = () => {
   return (
      <>
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
            <Route path="/auth" element={<Auth />} />
         </Routes>
      </>
   );
};

export default App;
