import styled, { css } from 'styled-components';

export const StyledCheckbox = styled.div<{
   reverse?: boolean;
}>`
   display: flex;
   align-items: center;
   column-gap: 1rem;
   ${(p) =>
      p.reverse
         ? css`
              flex-direction: row-reverse;
              justify-content: flex-end;
           `
         : css``}
   input {
      width: 1.6rem;
      height: 1.6rem;
   }

   label {
      cursor: pointer;
   }
`;
