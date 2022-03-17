import styled, { css } from 'styled-components';

export const StyledMenuHamburger = styled.div<{
   isOpen: boolean;
   width?: string;
   height?: string;
}>`
   width: ${(p) => p.width || '3rem'};
   height: ${(p) => p.height || '2.4rem'};
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   cursor: pointer;

   span {
      width: 100%;
      height: 0.4rem;
      background-color: var(--swe-black);
      border-radius: 6px;
   }

   ${(p) =>
      p.isOpen
         ? css`
              span:first-child {
                 transform: rotate(135deg) translateY(-18px);
              }

              span:nth-child(2) {
              }

              span:last-child {
                 transform: rotate(-135deg);
              }
           `
         : null}
`;
