import styled from 'styled-components';

export const StyledToast = styled.div<{
   left?: string;
   right?: string;
   bottom?: string;
   top?: string;
}>`
   position: fixed;
   left: ${(props) => props.left};
   right: ${(props) => props.right};
   bottom: ${(props) => props.bottom};
   top: ${(props) => props.top};
   display: flex;
   flex-direction: column-reverse;
   row-gap: 1.2rem;
   z-index: 10000;
   list-style: none;
`;

export const ToastItem = styled.div<{
   type?: 'SUCCESS' | 'ERROR' | 'WARN';
}>`
   background-color: ${(p) =>
      p.type === 'SUCCESS'
         ? '#4bb543'
         : p.type === 'ERROR'
         ? '#ff3333'
         : '#ffcc00'};
   padding: 1.2rem;
   border-radius: 6px;
   color: var(--swe-white);
   max-width: 30rem;
   min-width: 30rem;
   display: flex;
   align-items: center;
   justify-content: space-between;
   column-gap: 1.2rem;
   box-shadow: var(--swe-shadow);

   button {
      background-color: transparent;
      color: inherit;
      border: 0;
      width: 3.6rem;
      height: 3.6rem;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      svg {
         width: 2.4rem;
         height: 2.4rem;
      }
   }
`;
