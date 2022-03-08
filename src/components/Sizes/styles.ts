import styled from 'styled-components';
export const StyledSizes = styled.div`
   display: flex;
   align-items: center;
   column-gap: 1.2rem;

   .size {
      cursor: pointer;
      min-width: 3rem;
      height: 3rem;
      display: flex;
      justify-content: center;
      align-items: center;
      box-shadow: inset 0 0 0 1px var(--swe-grey-6);
      transition: all 0.3s ease;

      &.active {
         box-shadow: inset 0 0 0 1px var(--swe-black);
      }
   }
`;
