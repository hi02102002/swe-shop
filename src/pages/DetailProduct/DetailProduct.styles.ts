import styled from 'styled-components';

export const StyledDetailProduct = styled.div`
   padding: 3rem 0;
`;

export const StyledContainer = styled.div`
   display: flex;
   flex-direction: column;
   row-gap: 3rem;
`;

export const StyledMain = styled.div`
   display: flex;
   justify-content: space-between;

   @media screen and (max-width: 767.98px) {
      flex-direction: column;
      align-items: center;
      row-gap: 2rem;
   }

   & > div {
      width: 40%;
      padding: 0 1.5rem;

      @media screen and (max-width: 767.98px) {
         width: 70%;
      }
   }
`;
