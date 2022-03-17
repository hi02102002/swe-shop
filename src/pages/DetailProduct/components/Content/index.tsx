import Box from 'components/Box';
import Button from 'components/Button';
import InputAmount from 'components/InputAmount';
import Sizes from 'components/Sizes';
import Spinner from 'components/Spinner';
import { authSelector } from 'features/auth/authSlice';
import { cartAction } from 'features/cart';
import { cartsSelector } from 'features/cart/cartSlice';
import { addToastItem } from 'features/toastSlide';
import { wishlistAction, wishlistSelector } from 'features/wishlist';
import { useAppDispatch, useAppSelector } from 'hooks';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ProductItem, WishlistItem } from 'shared/types';
import { v4 } from 'uuid';
import { StyledContent } from './Content.styles';

const Content: React.FC<{
   product: ProductItem | null | WishlistItem;
}> = ({ product }) => {
   const [chooseSize, setChooseSize] = useState('');
   const [amount, setAmount] = useState<number>(1);
   const dispatch = useAppDispatch();
   const navigate = useNavigate();
   const { currentUser, accessToken } = useAppSelector(authSelector);
   const { add } = useAppSelector(cartsSelector);
   const { wishlist } = useAppSelector(wishlistSelector);

   const handleAddToCart = async () => {
      if (!accessToken) {
         dispatch(
            addToastItem({
               id: v4(),
               content: 'You must login before add product to cart!',
               type: 'ERROR',
            })
         );
         navigate('/auth');
         return;
      }
      await dispatch(
         cartAction.addToCart({
            amount: amount,
            color: product?.color as string,
            id: product?.id as string,
            productId: product?.productId as string,
            img: product?.imgs[0] as string,
            name: product?.name as string,
            price: product?.price as number,
            size: chooseSize as string,
            userId: currentUser?.uid as string,
         })
      );
      dispatch(
         addToastItem({
            id: v4(),
            content: 'You add product to cart successful!',
            type: 'SUCCESS',
         })
      );
   };

   const handleAddWishlist = () => {
      if (product) {
         const wishlistExist = wishlist.find(
            (item) => item.productId === product.id
         );

         if (wishlistExist) {
            dispatch(
               addToastItem({
                  id: v4(),
                  content: 'It already have in your wishlist!',
                  type: 'ERROR',
               })
            );
            return;
         }

         dispatch(
            wishlistAction.addWishlist({
               color: product.color,
               desc: product.desc,
               id: v4(),
               imgs: product.imgs,
               name: product.name,
               price: product.price,
               productId: product.id,
               size: product.size,
               types: product.types,
               userId: currentUser?.uid as string,
               wishListId: v4(),
            })
         );
         dispatch(
            addToastItem({
               id: v4(),
               content: 'Add to wishlist successful',
               type: 'SUCCESS',
            })
         );
      }
   };

   useEffect(() => {
      setChooseSize(product?.size[0] as string);
   }, [product]);

   return (
      <StyledContent>
         <h5>{product?.name}</h5>
         <h6>${product?.price}.00</h6>
         <Box className="color-wrap">
            <h6>Color: </h6>
            <span>{product?.color}</span>
         </Box>
         <Sizes
            sizes={product?.size as string[]}
            choseSize={chooseSize as string}
            setChoseSize={setChooseSize}
         />
         <Box className="quantity-wrap">
            <h6>Quantity: </h6>
            <InputAmount amount={amount} setAmount={setAmount} />
         </Box>
         <Box className="desc">
            <h6>Description: </h6>
            <p>{product?.desc}</p>
         </Box>
         <Box className="btn-group">
            <Button onClick={handleAddToCart} disabled={add.loading}>
               {add.loading ? <Spinner /> : 'Add to cart'}
            </Button>
            <Button onClick={handleAddWishlist}>Add to wishlist</Button>
         </Box>
      </StyledContent>
   );
};

export default Content;
