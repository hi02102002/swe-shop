import Box from 'components/Box';
import ModalQuickView from 'components/ModalWrapper/ModalQuickView';
import { authSelector } from 'features/auth';
import { addToastItem } from 'features/toastSlide';
import { wishlistAction, wishlistSelector } from 'features/wishlist';
import { useAppDispatch, useAppSelector } from 'hooks';
import React, { useMemo, useState } from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import { BsEye } from 'react-icons/bs';
import { IoRemoveOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { ProductItem, WishlistItem } from 'shared/types';
import { v4 } from 'uuid';
import {
   StyledButtonQuickView,
   StyledButtonWishlist,
   StyledImg,
   StyledName,
   StyledPrice,
   StyledProduct,
} from './styles';

interface Props {
   product: ProductItem | WishlistItem;
   type?: 'product' | 'wishlist';
}

const Product: React.FC<Props> = ({ product, type }) => {
   const [activeModalQuickView, setActiveModalQuickView] =
      useState<boolean>(false);
   const { currentUser } = useAppSelector(authSelector);
   const { wishlist } = useAppSelector(wishlistSelector);
   const dispatch = useAppDispatch();

   const link = useMemo(
      () =>
         type === 'wishlist'
            ? `/products/${product.productId}`
            : `/products/${product.id}`,
      [product, type]
   );

   return (
      <>
         <StyledProduct>
            {type === 'product' ? (
               <StyledButtonWishlist
                  tooltip="Add to wishlist"
                  onClick={() => {
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
                  }}
               >
                  <AiOutlineHeart />
               </StyledButtonWishlist>
            ) : null}

            {type === 'wishlist' && (
               <StyledButtonWishlist
                  tooltip="Remove"
                  onClick={() => {
                     dispatch(wishlistAction.removeWishlist(product.id));
                  }}
               >
                  <IoRemoveOutline />
               </StyledButtonWishlist>
            )}
            <Box
               sx={{
                  position: 'relative',
               }}
            >
               <StyledButtonQuickView
                  tooltip="Quick view"
                  onClick={() => {
                     setActiveModalQuickView(true);
                  }}
               >
                  <BsEye />
               </StyledButtonQuickView>
               <StyledImg>
                  <Link to={link}>
                     <div className="inner">
                        <img
                           src={product.imgs[0]}
                           alt={product.name}
                           className="front"
                        />
                        <img
                           src={product.imgs[1]}
                           alt={product.name}
                           className="back"
                        />
                     </div>
                  </Link>
               </StyledImg>
            </Box>
            <StyledName>
               <Link to={link}>{product.name}</Link>
            </StyledName>
            <StyledPrice>${product.price}.00</StyledPrice>
         </StyledProduct>
         {activeModalQuickView && (
            <ModalQuickView
               product={product}
               onClose={() => {
                  setActiveModalQuickView(false);
               }}
            />
         )}
      </>
   );
};

export default Product;
