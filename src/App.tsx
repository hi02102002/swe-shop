import Auth from 'pages/Auth';
import Home from 'pages/Home';
import Products from 'pages/Products';
import React from 'react';
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

const App = () => {
   return (
      <>
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/productsAll" element={<Products />} />
            <Route path="/auth" element={<Auth />} />
         </Routes>
      </>
   );
};

export default App;
