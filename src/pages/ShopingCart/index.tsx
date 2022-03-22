import Box from 'components/Box';
import Button from 'components/Button';
import Hero from 'components/Hero';
import Layout from 'components/Layout';
import Loader from 'components/Loader';
import { cartsSelector } from 'features/cart';
import { AnimatePresence, motion } from 'framer-motion';
import { useAppSelector } from 'hooks';
import React, { useMemo } from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import Cart from './Cart';
import {
   NoCart,
   OrderSummary,
   StyledContainer,
   StyledHeaderTable,
   StyledListCart,
   StyledShoppingCart,
   StyledTable,
} from './ShoppingCart.styles';

const ShoppingCart = () => {
   const { carts, loading } = useAppSelector(cartsSelector);
   const navigate = useNavigate();

   const totalCart = useMemo(() => {
      return carts.reduce((prev, current) => prev + current.amount, 0);
   }, [carts]);

   const totalPrice = useMemo(() => {
      return carts.reduce(
         (prev, current) => prev + current.amount * current.price,
         0
      );
   }, [carts]);

   return loading ? (
      <Loader />
   ) : (
      <Layout>
         <Hero path="Your Shopping Cart" content="Your Shopping Cart" />
         <StyledShoppingCart>
            <div className="container">
               <StyledContainer>
                  {carts.length > 0 ? (
                     <StyledTable>
                        <StyledHeaderTable>
                           <div className="product">Product</div>
                           <div className="price">Price</div>
                           <div className="quantity">Quantity</div>
                           <div className="total">Total</div>
                        </StyledHeaderTable>
                        {carts.length > 0 && (
                           <StyledListCart>
                              <AnimatePresence>
                                 {carts.map((cart) => {
                                    return (
                                       <motion.li
                                          layout
                                          key={cart.id}
                                          initial={{ opacity: 0 }}
                                          animate={{ opacity: 1 }}
                                          exit={{ opacity: 0 }}
                                       >
                                          <Cart cart={cart} />
                                       </motion.li>
                                    );
                                 })}
                              </AnimatePresence>
                           </StyledListCart>
                        )}
                     </StyledTable>
                  ) : (
                     <NoCart>
                        <AiOutlineShoppingCart />
                        <h5>Your cart is currently empty.</h5>
                        <Button
                           onClick={() => {
                              navigate('/products');
                           }}
                        >
                           Return to shop
                        </Button>
                     </NoCart>
                  )}
                  {carts.length > 0 && (
                     <OrderSummary>
                        <h5>Order Summary</h5>
                        <Box>
                           <span>Total</span>
                           <span>{totalCart} item(s)</span>
                        </Box>
                        <Box>
                           <span>Total weight </span>
                           <span>0.0 lb</span>
                        </Box>
                        <Box className="total-price">
                           <span>Total price </span>
                           <h6>${totalPrice}.00</h6>
                        </Box>
                        <Button
                           onClick={() => {
                              navigate('/checkout');
                           }}
                        >
                           Go to checkout
                        </Button>
                     </OrderSummary>
                  )}
               </StyledContainer>
            </div>
         </StyledShoppingCart>
      </Layout>
   );
};

export default ShoppingCart;
