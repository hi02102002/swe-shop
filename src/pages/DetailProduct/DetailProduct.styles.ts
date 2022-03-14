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

   & > div {
      width: 40%;
      padding: 0 1.5rem;
   }
`;
