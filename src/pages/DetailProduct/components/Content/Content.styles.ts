import styled from 'styled-components';

export const StyledContent = styled.div`
   width: 60% !important;
   display: flex;
   flex-direction: column;
   row-gap: 1.5rem;
   flex-shrink: 0;

   .box.color-wrap {
      display: flex;
      align-items: center;
      column-gap: 1rem;

      span {
         text-transform: uppercase;
      }
   }
   .box.quantity-wrap {
      display: flex;
      align-items: center;
      column-gap: 1rem;
   }
   .box.btn-group {
      display: flex;
      align-items: center;
      column-gap: 1.5rem;

      button {
         width: 100%;
      }
   }

   .box.desc {
      display: flex;
      align-items: flex-start;
      column-gap: 1rem;
      p {
         white-space: pre-wrap;
      }
   }
`;
