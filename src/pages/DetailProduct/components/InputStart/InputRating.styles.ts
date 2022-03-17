import styled from 'styled-components';

export const StyledInputRating = styled.div`
   display: flex;
   flex-direction: column;
   row-gap: 0.8rem;
   .box {
      display: flex;
      align-items: center;
      column-gap: 1rem;

      .star {
         cursor: pointer;
         display: flex;
         justify-content: center;
         align-items: center;
      }

      svg {
         color: #ffcc00;
         width: 2.4rem;
         height: 2.4rem;
      }
   }
`;
