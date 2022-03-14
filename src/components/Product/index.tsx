import Box from 'components/Box';
import ModalQuickView from 'components/ModalWrapper/ModalQuickView';
import React, { useState } from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import { BsEye } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { ProductItem } from 'shared/types';
import {
   StyledButtonQuickView,
   StyledButtonWishlist,
   StyledImg,
   StyledName,
   StyledPrice,
   StyledProduct,
} from './styles';

interface Props {
   product: ProductItem;
   type?: 'product' | 'wishlist';
}

const Product: React.FC<Props> = ({ product, type }) => {
   const [activeModalQuickView, setActiveModalQuickView] =
      useState<boolean>(false);

   return (
      <>
         <StyledProduct>
            {type === 'product' && (
               <StyledButtonWishlist tooltip="Add to wishlist">
                  <AiOutlineHeart />
               </StyledButtonWishlist>
            )}
            {type === 'wishlist' && (
               <StyledButtonWishlist tooltip="Remove">
                  <AiOutlineHeart />
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
                  <Link to={`/products/${product.id}`}>
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
               <Link to={`/products/${product.id}`}>{product.name}</Link>
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
