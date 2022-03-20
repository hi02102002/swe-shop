import Box from 'components/Box';
import Cart from 'components/Cart';
import { authAction } from 'features/auth/auth.action';
import { authSelector } from 'features/auth/authSlice';
import { cartAction } from 'features/cart';
import { cartsSelector } from 'features/cart/cartSlice';
import { addToastItem } from 'features/toastSlide';
import { useAppDispatch, useAppSelector, useIsMounted } from 'hooks';
import { IMGS } from 'images';
import _ from 'lodash';
import React, { useMemo, useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { IoCloseOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { v4 } from 'uuid';
import { HeaderContainer, StyledHeader } from './styles';

const Header = () => {
   const { accessToken } = useAppSelector(authSelector);
   const [showCart, setShowCart] = useState<boolean>(false);
   const [showMenu, setShowMenu] = useState('');
   const { carts } = useAppSelector(cartsSelector);
   const dispatch = useAppDispatch();
   const isMounted = useIsMounted();

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
               <Box className={showMenu}>
                  <Link to={'/my-account'}>My account</Link>
                  <Link to={'/products'}>Products</Link>
                  <Link to={'/wishlist'}>Wishlist</Link>
                  {accessToken ? (
                     <div
                        onClick={async () => {
                           await dispatch(authAction.handleLogout(_));
                           await dispatch(cartAction.umountCart());
                           dispatch(
                              addToastItem({
                                 id: v4(),
                                 content: 'Logout successful!',
                                 type: 'SUCCESS',
                              })
                           );
                        }}
                     >
                        Log out
                     </div>
                  ) : (
                     <Link to={'/auth'}>Login - Register</Link>
                  )}
                  <IoCloseOutline
                     className="close"
                     onClick={() => {
                        setShowMenu('');
                     }}
                  />
               </Box>
               <div className="cart">
                  <div
                     onClick={() => {
                        if (isMounted()) {
                           setShowCart(true);
                        }
                     }}
                  >
                     Cart
                  </div>
                  <span className="total-amount-cart">{totalAmountCart}</span>
                  {showCart && (
                     <Cart
                        onClose={() => {
                           if (isMounted()) {
                              setShowCart(false);
                           }
                        }}
                     />
                  )}
               </div>
               <AiOutlineMenu
                  className="menu"
                  onClick={() => {
                     setShowMenu('active');
                  }}
               />
            </HeaderContainer>
         </div>
      </StyledHeader>
   );
};

export default React.memo(Header);
