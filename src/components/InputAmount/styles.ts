import styled from 'styled-components';

export const StyledInputAmount = styled.div`
   display: flex;
   column-gap: 1.2rem;
   align-items: center;

   .box {
      display: flex;
      background-color: var(--swe-white);
      border: 1px solid var(--swe-grey-6);
      max-width: 13rem;
   }

   input {
      text-align: center;
      flex: 1;
      flex-shrink: 1;
      width: 100%;
      border: 0;
      color: var(--swe-grey-3);
   }

   button {
      background-color: transparent;
      border: 0;
      outline: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      padding: 1.2rem;
      color: var(--swe-grey-3);
   }
`;
