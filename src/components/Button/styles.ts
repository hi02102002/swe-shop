import styled from 'styled-components';

export const StyledButton = styled.button`
   display: flex;
   justify-content: center;
   align-items: center;
   font-size: 1.4rem;
   text-transform: uppercase;
   min-height: 3.75rem;
   border-radius: 6px;
   background-color: var(--swe-black);
   color: var(--swe-white);
   border: 1px solid var(--swe-black);
   cursor: pointer;
   transition: all 0.3s ease;

   &:hover {
      background: #505152;
      border-color: #505152;
      color: #ffffff;
   }

   &:disabled {
      pointer-events: none;
      border-color: #505152;
      color: #ffffff;
      background: #505152;
   }
`;
