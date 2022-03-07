import styled, { css } from 'styled-components';

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

   input {
      height: 3.75rem;
      padding: 1.2rem 1.6rem;
      font-size: 1.2rem;
      background-color: var(--swe-white);
      line-height: 1.25;
      border-radius: 6px;
      width: 100%;
      transition: all 0.3s ease;
      color: var(--swe-grey-3);
      border: 1px solid var(--swe-grey);

      ${(p) =>
         p.isError
            ? css`
                 border-color: blue;
              `
            : undefined}

      ${(p) =>
         p.isFocus
            ? css`
                 border-color: var(--swe-black);
              `
            : undefined}
   }

   p {
      font-size: 1.1rem;
      color: red;
   }
`;
