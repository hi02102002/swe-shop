import Footer from 'components/Footter';
import Header from 'components/Header';
import React from 'react';

const Layout: React.FC = ({ children }) => {
   return (
      <>
         <Header />
         {children}
         <Footer />
      </>
   );
};

export default Layout;
