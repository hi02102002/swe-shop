import styled from 'styled-components';

export const StyledProducts = styled.div`
   padding: 3rem 0;

   & > .container {
      display: flex;
      column-gap: 1.5rem;

      & > .box {
         flex: 1;
      }

      & > .box > h6 {
         text-align: center;
         padding: 3rem 0;
      }

      @media screen and (max-width: 767.98px) {
         flex-direction: column;
         row-gap: 2.4rem;
      }
   }
`;
