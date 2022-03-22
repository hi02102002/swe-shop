import Box from 'components/Box';
import { cartAction } from 'features/cart';
import { useAppDispatch } from 'hooks';
import React, { useEffect, useState } from 'react';
import { IoCloseOutline } from 'react-icons/io5';
import { CartItem as CartItemType } from 'shared/types';
import { StyledCartItem, StyledInputAmount } from './Cart.styles';

interface Props {
   cart: CartItemType;
}

const CartItem: React.FC<Props> = ({ cart }) => {
   const [amount, setAmount] = useState<number>(cart.amount);

   const dispatch = useAppDispatch();

   const handleRemoveCartItem = (
      e: React.MouseEvent<HTMLButtonElement, MouseEvent>
   ) => {
      e.stopPropagation();
      dispatch(
         cartAction.removeCartItem({
            productId: cart.productId,
            size: cart.size,
         })
      );
   };

   useEffect(() => {
      dispatch(
         cartAction.updateAmountCartItem({
            productId: cart.productId,
            size: cart.size,
            amount: amount,
         })
      );
   }, [amount, dispatch, cart.productId, cart.size]);

   useEffect(() => {
      setAmount(cart.amount);
   }, [cart.amount]);

   return (
      <StyledCartItem>
         <div className="img">
            <img src={cart.img} alt="" />
         </div>
         <Box>
            <div
               style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  columnGap: '1rem',
               }}
            >
               <span>{cart.name}</span>
               <button className="btn-remove" onClick={handleRemoveCartItem}>
                  <IoCloseOutline />
               </button>
            </div>
            <span>Size: {cart.size}</span>
            <Box>
               <span>
                  ${cart.price} x ${cart.amount}
               </span>
               <StyledInputAmount
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
            </Box>
         </Box>
      </StyledCartItem>
   );
};

export default CartItem;
