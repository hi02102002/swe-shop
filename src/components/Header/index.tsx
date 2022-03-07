import Box from 'components/Box';
import { authSelector } from 'features/authSlice';
import { useAppSelector } from 'hooks';
import { IMGS } from 'images';
import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderContainer, StyledHeader } from './styles';

const Header = () => {
   const { accessToken } = useAppSelector(authSelector);
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
                  <div>Cart</div>
               </Box>
            </HeaderContainer>
         </div>
      </StyledHeader>
   );
};

export default Header;
