import styled from 'styled-components';

export const StyledInputField = styled.div<{
   isFocus?: boolean;
   isError?: boolean;
}>`
   display: flex;
   flex-direction: column;
   row-gap: 0.8rem;

   label {
      font-size: inherit;
   }

   .input {
      height: 3.75rem;
      padding: 1.2rem 1.6rem;
      font-size: 1.4rem;
      background-color: var(--swe-white);
      line-height: 1.25;
      border-radius: 6px;
      width: 100%;
      transition: all 0.3s ease;
      color: var(--swe-grey-3);
      border: 2px solid var(--swe-grey);
      border-color: ${(p) => (p.isError ? 'red' : undefined)};

      &:focus {
         border-color: ${(p) => (p.isError ? 'red' : 'var(--swe-black)')};
      }
   }

   p {
      font-size: 1.1rem;
      color: red;
   }

   textarea.input {
      height: unset;
      min-height: 13rem;
      resize: none;
      font-size: inherit;
      font-family: inherit;
   }
`;
