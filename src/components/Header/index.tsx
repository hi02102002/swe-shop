import Box from 'components/Box';
import Cart from 'components/Cart';
import { authSelector } from 'features/authSlice';
import { cartsSelector } from 'features/cartSlice';
import { useAppSelector } from 'hooks';
import { IMGS } from 'images';
import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { HeaderContainer, StyledHeader } from './styles';

const Header = () => {
   const { accessToken } = useAppSelector(authSelector);
   const { carts } = useAppSelector(cartsSelector);
   const [showCart, setShowCart] = useState<boolean>(false);

   const totalAmountCart = useMemo(() => {
      return carts.reduce(
         (prevValue, currentValue) => (prevValue += currentValue.amount),
         0
      );
   }, [carts]);

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
                     <span className="total-amount-cart">
                        {totalAmountCart}
                     </span>
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
