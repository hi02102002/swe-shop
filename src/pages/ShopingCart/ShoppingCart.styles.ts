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

export const StyledContainer = styled.div`
   display: flex;
   flex-direction: column;
   row-gap: 3rem;
`;

export const StyledHeaderTable = styled.div`
   display: flex;
   padding: 1.5rem 0;
   border-bottom: 1px solid var(--swe-grey-1);
   column-gap: 1.2rem;

   @media screen and (max-width: 767.98px) {
      display: none;
   }
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

   @media screen and (max-width: 767.98px) {
      row-gap: unset;
   }
`;

export const StyledCart = styled.div`
   display: flex;
   align-items: center;
   width: 100%;
   column-gap: 1.2rem;

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

      @media screen and (max-width: 767.98px) {
         padding: 20%;
      }
   }

   .product {
      display: flex;
      align-items: center;
      column-gap: 1.2rem;

      .content {
         display: flex;
         align-items: center;
         column-gap: 1.2rem;
         width: 100%;
      }
   }

   .heading {
      display: none;
   }

   @media screen and (max-width: 767.98px) {
      flex-direction: column;
      align-items: unset;
      row-gap: 1.2rem;
      padding-bottom: 1.2rem;
      border-bottom: 1px solid var(--swe-grey-6);

      .product,
      .price,
      .total,
      .quantity {
         width: 100%;
         display: flex;
         column-gap: 1.2rem;
         padding: 1rem;
      }
      .heading {
         display: block;
         width: 30%;
      }

      .content {
         width: 100%;
      }
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

export const OrderSummary = styled.div`
   width: 100%;
   max-width: 55rem;
   margin: 0 auto;
   padding: 2.4rem;
   border-radius: 6px;
   background-color: var(--swe-grey-1);

   h5 {
      margin-bottom: 2.4rem;
   }

   .box {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 1.2rem;

      &.total-price {
         padding-top: 2.4rem;
         border-top: 1px solid;
         margin-bottom: 0;
         span {
            font-size: 1.6rem;
            text-transform: uppercase;
         }
      }
   }

   button {
      width: 100%;
      margin-top: 2.4rem;
   }
`;
