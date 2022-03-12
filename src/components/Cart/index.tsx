import Button from 'components/Button';
import Spinner from 'components/Spinner';
import { cartAction } from 'features/cart';
import { cartsSelector } from 'features/cart/cartSlice';
import { useAppDispatch, useAppSelector } from 'hooks';
import _ from 'lodash';
import React, { useMemo } from 'react';
import {
   CartBottom,
   CartList,
   Loading,
   StyledCart,
   Total,
} from './Cart.styles';
import CartItem from './CartItem';

const Cart: React.FC<{
   onClose: () => any;
}> = ({ onClose }) => {
   const { carts, remove } = useAppSelector(cartsSelector);
   const dispatch = useAppDispatch();
   const total = useMemo(() => {
      return carts.reduce((perviousValue, currentValue) => {
         return (perviousValue += currentValue.amount * currentValue.price);
      }, 0);
   }, [carts]);

   return (
      <StyledCart onClickAway={onClose}>
         {remove.loading && (
            <Loading>
               <Spinner />
            </Loading>
         )}
         <CartList>
            {carts.length > 0 ? (
               carts.map((cart) => (
                  <CartItem key={`${cart.id} ${cart.size}`} cart={cart} />
               ))
            ) : (
               <p className="alter">No products in the cart.</p>
            )}
         </CartList>
         <CartBottom>
            <Total>
               <h6>Total:</h6>
               <h6>${total}.00</h6>
            </Total>
            <div className="group-btn">
               <Button
                  onClick={() => {
                     dispatch(cartAction.removeAllCart(_));
                  }}
                  disabled={carts.length === 0}
               >
                  Remove All
               </Button>
               <Button disabled={carts.length === 0}>Check out</Button>
            </div>
         </CartBottom>
      </StyledCart>
   );
};

export default React.memo(Cart);
