import styled from 'styled-components';

export const StyledProduct = styled.div`
   row-gap: 1.2rem;
   height: 100%;

   display: flex;
   flex-direction: column;

   position: relative;
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

export const StyledAddWishlist = styled.button`
   position: absolute;
   right: 1.6rem;
   top: 1.6rem;
   z-index: 3;

   width: 3.6rem;
   height: 3.6rem;

   display: flex;
   justify-content: center;
   align-items: center;

   border-radius: 50%;
   border: 0;
   box-shadow: var(--swe-shadow);

   cursor: pointer;

   background-color: var(--swe-white);
   outline: 0;

   transition: all 0.3s ease;

   .tool-tip {
      position: absolute;
      right: calc(100% + 1rem);

      width: max-content;
      padding: 0.5rem 1rem;

      background-color: var(--swe-white);

      box-shadow: var(--swe-shadow);
      border-radius: 6px;

      opacity: 0;
      visibility: hidden;

      transition: all 0.3s ease;
   }

   svg {
      width: 2rem;
      height: 2rem;
      transition: all 0.3s ease;
   }

   &:hover {
      background-color: var(--swe-black);

      svg {
         color: var(--swe-white);
      }
      .tool-tip {
         opacity: 1;
         visibility: visible;
      }
   }
`;
