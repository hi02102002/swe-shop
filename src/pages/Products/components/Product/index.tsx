import Button from 'components/Button';
import React from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { ProductItem } from 'shared/types';
import {
   StyledAddWishlist,
   StyledImg,
   StyledName,
   StyledPrice,
   StyledProduct,
} from './styles';

interface Props {
   product: ProductItem;
}

const Product: React.FC<Props> = ({ product }) => {
   return (
      <StyledProduct>
         <StyledAddWishlist>
            <AiOutlineHeart />
            <div className="tool-tip">Add to wishlist</div>
         </StyledAddWishlist>
         <StyledImg>
            <div className="inner">
               <img
                  src={product.imgs[0]}
                  alt={product.name}
                  className="front"
               />
               <img src={product.imgs[1]} alt={product.name} className="back" />
            </div>
         </StyledImg>
         <StyledName>
            <Link to={`/products/${product.id}`}>{product.name}</Link>
         </StyledName>
         <StyledPrice>${product.price}.00</StyledPrice>
         <Button>Add to cart</Button>
      </StyledProduct>
   );
};

export default Product;
