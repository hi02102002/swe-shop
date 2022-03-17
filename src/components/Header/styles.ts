import Box from 'components/Box';
import styled from 'styled-components';
export const StyledHeader = styled.header`
   height: var(--height-header);
   display: flex;
   align-items: center;
`;

export const HeaderContainer = styled(Box)`
   display: flex;
   align-items: center;
   column-gap: 2rem;

   .logo {
      flex-shrink: 0;
      img {
         width: 8rem;
      }
   }

   & > .box {
      display: flex;
      align-items: center;
      margin-left: auto;
      column-gap: 2rem;
      height: 100vh;
      top: 0;
      bottom: 0;

      .close {
         display: none;
      }

      & > * {
         cursor: pointer;
      }

      @media screen and (max-width: 767.98px) {
         position: fixed;
         flex-direction: column;
         right: 0;
         width: 26rem;
         padding: 3rem;
         padding-top: 6rem;
         row-gap: 3rem;
         background-color: var(--swe-white);
         z-index: 1000;
         box-shadow: var(--swe-shadow);
         transform: translateX(110%);
         transition: transform 0.3s ease;

         a {
            font-size: 2rem;
         }

         .close {
            display: block;
            position: absolute;
            width: 2.4rem;
            height: 2.4rem;
            cursor: pointer;
            top: 3rem;
            right: 3rem;
            color: var(--swe-black);
         }

         &.active {
            transform: translateX(0%);
         }
      }
   }

   .cart {
      position: relative;
      cursor: unset;

      & > div:first-child {
         cursor: pointer;
      }
      @media screen and (max-width: 767.98px) {
         margin-left: auto;
      }
   }

   .total-amount-cart {
      position: absolute;
      font-size: 1rem;
      width: 1.5rem;
      height: 1.5rem;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: var(--swe-orange);
      border-radius: 50%;
      color: var(--swe-white);
      top: -1rem;
      right: -1rem;
   }

   .menu {
      cursor: pointer;
      width: 2.4rem;
      height: 2.4rem;
      color: var(--swe-black);
      display: none;

      @media screen and (max-width: 767.98px) {
         display: block;
      }
   }
`;
