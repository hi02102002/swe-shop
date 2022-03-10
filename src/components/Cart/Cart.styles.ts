import Box from 'components/Box';
import ClickAwayListener from 'components/ClickAwayListener';
import InputAmount from 'components/InputAmount';
import styled from 'styled-components';

export const StyledCart = styled(ClickAwayListener)`
   background-color: var(--swe-white);
   width: 35rem;
   border-radius: 6px;
   position: absolute;
   right: 0;
   top: 45px;
   z-index: 999;
   box-shadow: var(--swe-shadow);
   animation: fadeInUp 0.3s ease;
   overflow: hidden;

   .alter {
      text-align: center;
   }
`;

export const CartList = styled.ul`
   max-height: 37.2rem;
   overflow-y: auto;
   padding: 1.2rem 0rem;

   /* width */
   &::-webkit-scrollbar {
      width: 5px;
   }

   /* Track */
   &::-webkit-scrollbar-track {
      background: #f1f1f1;
   }

   /* Handle */
   &::-webkit-scrollbar-thumb {
      background: #888;
   }

   /* Handle on hover */
   &::-webkit-scrollbar-thumb:hover {
      background: #555;
   }
`;

export const StyledCartItem = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
   column-gap: 1.2rem;
   padding: 1.2rem;
   border-radius: 6px;

   .img {
      position: relative;
      width: 10rem;
      height: 10rem;
      flex-shrink: 0;
   }

   .img img {
      object-fit: cover;
      height: 100%;
      width: 100%;
   }

   & > .box {
      display: flex;
      flex-direction: column;
      row-gap: 0.5rem;
      flex: 1;
   }

   & > .box > .box {
      display: flex;
      align-items: center;
      column-gap: 1.2rem;
   }

   .btn-remove {
      width: 3rem;
      height: 3rem;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: transparent;
      border: 0;
      cursor: pointer;

      svg {
         width: 2.4rem;
         height: 2.4rem;
      }
   }
`;

export const StyledInputAmount = styled(InputAmount)`
   width: 10rem;
   button {
      padding: 0.5rem;
   }
`;

export const CartBottom = styled.div`
   padding: 1.2rem;
   display: flex;
   flex-direction: column;
   row-gap: 1.2rem;

   .group-btn {
      display: flex;
      align-items: center;
      column-gap: 1.2rem;
      width: 100%;

      button {
         width: 100%;
      }
   }
`;

export const Total = styled(Box)`
   display: flex;
   align-items: center;
   justify-content: space-between;
`;
