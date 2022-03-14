import Button from 'components/Button';
import Hero from 'components/Hero';
import Layout from 'components/Layout';
import Loader from 'components/Loader';
import { cartsSelector } from 'features/cart';
import { useAppSelector } from 'hooks';
import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { v4 } from 'uuid';
import {
   NoCart,
   StyledCart,
   StyledContainer,
   StyledHeaderTable,
   StyledListCart,
   StyledShoppingCart,
   StyledTable,
} from './ShoppingCart.styles';

const ShoppingCart = () => {
   const { carts, loading } = useAppSelector(cartsSelector);
   const navigate = useNavigate();
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
                              {carts.map((cart) => {
                                 const total = cart.amount * cart.price;
                                 return (
                                    <li key={v4()}>
                                       <StyledCart>
                                          <div className="product">
                                             <div className="img-wrap">
                                                <div className="inner">
                                                   <img
                                                      src={cart.img}
                                                      alt={cart.name}
                                                   />
                                                </div>
                                             </div>
                                             <h6>
                                                {cart.name} {cart.size}
                                             </h6>
                                          </div>
                                          <div className="price ">
                                             <span>${cart.price}.00</span>
                                          </div>
                                          <div className="quantity">
                                             {cart.amount}
                                          </div>
                                          <div className="total">
                                             <span>${total}.00</span>
                                          </div>
                                       </StyledCart>
                                    </li>
                                 );
                              })}
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
               </StyledContainer>
            </div>
         </StyledShoppingCart>
      </Layout>
   );
};

export default ShoppingCart;
