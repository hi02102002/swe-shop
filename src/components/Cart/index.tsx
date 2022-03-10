import Button from 'components/Button';
import { cartsSelector, removeAllCartItem } from 'features/cartSlice';
import { useAppDispatch, useAppSelector } from 'hooks';
import React, { useMemo } from 'react';
import { CartBottom, CartList, StyledCart, Total } from './Cart.styles';
import CartItem from './CartItem';

const Cart: React.FC<{
   onClose: () => any;
}> = ({ onClose }) => {
   const { carts } = useAppSelector(cartsSelector);
   const dispatch = useAppDispatch();
   const total = useMemo(() => {
      return carts.reduce((perviousValue, currentValue) => {
         return (perviousValue += currentValue.amount * currentValue.price);
      }, 0);
   }, [carts]);

   return (
      <StyledCart onClickAway={onClose}>
         <CartList>
            {carts.map((cart) => (
               <CartItem key={`${cart.id} ${cart.size}`} cart={cart} />
            ))}
         </CartList>
         <CartBottom>
            <Total>
               <h6>Total:</h6>
               <h6>${total}.00</h6>
            </Total>
            <div className="group-btn">
               <Button
                  onClick={() => {
                     dispatch(removeAllCartItem());
                  }}
               >
                  Remove All
               </Button>
               <Button>Check out</Button>
            </div>
         </CartBottom>
      </StyledCart>
   );
};

export default React.memo(Cart);
