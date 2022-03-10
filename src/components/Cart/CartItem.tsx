import Box from 'components/Box';
import { removeCartItem, updateAmountCartItem } from 'features/cartSlice';
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
         removeCartItem({
            productId: cart.productId,
            size: cart.size,
         })
      );
   };

   useEffect(() => {
      dispatch(
         updateAmountCartItem({
            productId: cart.productId,
            size: cart.size,
            amount: amount,
         })
      );
   }, [amount, dispatch, cart.productId, cart.size]);

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
                        removeCartItem({
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
