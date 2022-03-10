import IconButton from 'components/IconButton';
import styled from 'styled-components';

export const StyledButtonQuickView = styled(IconButton)`
   width: 4rem;
   height: 4rem;
   position: absolute;
   left: 50%;
   transform: translateX(-50%) translateY(150%);
   bottom: 1.6rem;
   z-index: 3;

   .tool-tip {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      bottom: calc(100% + 1rem);
   }
`;

export const StyledProduct = styled.div`
   row-gap: 1.2rem;
   height: 100%;

   display: flex;
   flex-direction: column;

   position: relative;

   .box {
      overflow: hidden;
   }

   .box:hover ${StyledButtonQuickView} {
      transform: translateX(-50%) translateY(0);
   }
`;

export const StyledImg = styled.div`
   padding-top: 100%;

   position: relative;
   overflow: hidden;
   cursor: pointer;

   .inner {
      position: absolute;
      inset: 0;

      width: 100%;
      height: 100%;
   }

   img {
      width: 100%;
      height: 100%;
      object-fit: cover;

      transition: opacity 0.3s ease, transform 0.3s ease;

      &.front {
         position: relative;
         z-index: 1;
      }

      &.back {
         position: absolute;
         inset: 0;
         z-index: 2;

         opacity: 0;
      }
   }

   .inner:hover img.back {
      opacity: 1;
   }
`;

export const StyledName = styled.h6`
   text-align: center;
`;

export const StyledPrice = styled.span`
   display: block;
   margin-top: auto;
   text-align: center;
`;

export const StyledButtonWishlist = styled(IconButton)`
   position: absolute;
   right: 1.6rem;
   top: 1.6rem;
   z-index: 3;
`;
