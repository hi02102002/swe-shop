import styled, { keyframes } from 'styled-components';

const spin = keyframes`
0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`;

export const StyledSpinner = styled.div<{
   color?: string;
   widthLine?: string;
   width?: string;
   height?: string;
}>`
   border: 2px solid rgba(0, 0, 0, 0.1);
   border-width: ${(p) => p.widthLine || '2px'};
   border-left-color: ${(p) => p.color || 'var(--swe-white)'};
   width: ${(p) => p.width || '2.4rem'};
   height: ${(p) => p.height || '2.4rem'};
   border-radius: 50%;

   animation: ${spin} 1s linear infinite;
`;
