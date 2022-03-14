import styled from 'styled-components';

export const StyledShoppingCart = styled.div`
   padding: 6rem 0;

   .product {
      width: 35%;
   }

   .price {
      width: 18%;
   }

   .quantity {
      width: 20%;
   }

   .total {
      width: 17%;
   }
`;

export const StyledContainer = styled.div``;

export const StyledHeaderTable = styled.div`
   display: flex;
   padding: 1.5rem 0;
   border-bottom: 1px solid var(--swe-grey-1);
`;
export const StyledTable = styled.div`
   display: flex;
   flex-direction: column;
   row-gap: 2.5rem;
`;

export const StyledListCart = styled.ul`
   display: flex;
   flex-direction: column;
   row-gap: 2.5rem;
`;

export const StyledCart = styled.div`
   display: flex;
   align-items: center;

   .img-wrap {
      position: relative;
      padding: 10%;

      .inner {
         position: absolute;
         width: 100%;
         height: 100%;
         inset: 0;
      }

      img {
         width: 100%;
         height: 100%;
         object-fit: cover;
      }
   }

   .product {
      display: flex;
      align-items: center;
      column-gap: 1.2rem;
   }
`;

export const NoCart = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   row-gap: 2rem;
   padding: 6rem 0;

   svg {
      width: 6rem;
      height: 6rem;
   }

   button {
      padding: 0 1.5rem;
   }
`;
