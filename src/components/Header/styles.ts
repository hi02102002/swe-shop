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
   justify-content: space-between;
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
      column-gap: 2rem;

      & > * {
         cursor: pointer;
      }

      & > .box {
         position: relative;
         cursor: unset;

         & > div:first-child {
            cursor: pointer;
         }
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
`;
