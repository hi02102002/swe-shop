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

   .box {
      display: flex;
      align-items: center;
      column-gap: 2rem;
   }

   .box > * {
      cursor: pointer;
   }
`;
