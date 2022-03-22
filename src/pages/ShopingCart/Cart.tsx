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
            <div className="heading">Product</div>
            <div className="content">
               <div className="img-wrap">
                  <div className="inner">
                     <img src={cart.img} alt={cart.name} />
                  </div>
               </div>
               <h6>
                  {cart.name} {cart.size}
               </h6>
            </div>
         </div>
         <div className="price ">
            <div className="heading">Price</div>
            <div className="content">
               <span>${cart.price}.00</span>
            </div>
         </div>
         <div className="quantity">
            <div className="heading">Quantity</div>
            <div className="content">
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
         </div>
         <div className="total">
            <div className="heading">Total</div>
            <div className="content">
               <span>${total}.00</span>
            </div>
         </div>
      </StyledCart>
   );
};

export default Cart;
