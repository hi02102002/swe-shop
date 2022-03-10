import Box from 'components/Box';
import Cart from 'components/Cart';
import { authSelector } from 'features/authSlice';
import { useAppSelector } from 'hooks';
import { IMGS } from 'images';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HeaderContainer, StyledHeader } from './styles';

const Header = () => {
   const { accessToken } = useAppSelector(authSelector);
   const [showCart, setShowCart] = useState<boolean>(false);
   return (
      <StyledHeader>
         <div className="container">
            <HeaderContainer>
               <Link to="/" className="logo">
                  <img src={IMGS.logo} alt="" />
               </Link>
               <Box>
                  <Link to={accessToken ? '/my-account' : '/auth'}>
                     My account
                  </Link>
                  <div>Search</div>
                  <Box>
                     <div
                        onClick={() => {
                           setShowCart(true);
                        }}
                     >
                        Cart
                     </div>
                     {showCart && (
                        <Cart
                           onClose={() => {
                              setShowCart(false);
                           }}
                        />
                     )}
                  </Box>
               </Box>
            </HeaderContainer>
         </div>
      </StyledHeader>
   );
};

export default React.memo(Header);
