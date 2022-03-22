import InputAmount from 'components/InputAmount';
import { cartAction } from 'features/cart';
import { useAppDispatch } from 'hooks';
import React, { useEffect, useMemo, useState } from 'react';
import { CartItem } from 'shared/types';
import { StyledCart } from './ShoppingCart.styles';

const Cart: React.FC<{
   cart: CartItem;
}> = ({ cart }) => {
   const [amount, setAmount] = useState<number>(cart.amount);
   const dispatch = useAppDispatch();

   const total = useMemo(() => {
      return cart.amount * cart.price;
   }, [cart.amount, cart.price]);

   useEffect(() => {
      setAmount(cart.amount);
   }, [cart.amount]);

   useEffect(() => {
      dispatch(
         cartAction.updateAmountCartItem({
            productId: cart.productId,
            size: cart.size,
            amount: amount,
         })
      );
   }, [amount, dispatch, cart.productId, cart.size]);

   return (
      <StyledCart>
         <div className="product">
            <div className="img-wrap">
               <div className="inner">
                  <img src={cart.img} alt={cart.name} />
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
            <InputAmount
               amount={amount}
               setAmount={setAmount}
               onRemove={() => {
                  dispatch(
                     cartAction.removeCartItem({
                        productId: cart.productId,
                        size: cart.size,
                     })
                  );
               }}
            />
         </div>
         <div className="total">
            <span>${total}.00</span>
         </div>
      </StyledCart>
   );
};

export default Cart;
