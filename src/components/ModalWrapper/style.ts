import styled from 'styled-components';

export const StyledModalWrapper = styled.div`
   position: fixed;
   inset: 0;
   width: 100%;
   height: 100%;
   background-color: rgba(0, 0, 0, 0.7);
   display: flex;
   justify-content: center;
   align-items: center;
   animation: fadeIn 0.3s ease;
   padding: 0 1.5rem;
   z-index: 1000;
`;

export const StyledModalQuickView = styled.div`
   width: 100%;
   background-color: var(--swe-white);
   max-width: 90rem;
   animation: modalZoomIn 0.3s ease;
   border-radius: 6px;
   overflow: hidden;
`;

export const StyledHeader = styled.div`
   background-color: var(--swe-black);
   padding: 1rem;
   color: var(--swe-white);
   text-align: center;
   position: relative;

   button {
      cursor: pointer;
      border: 0;
      width: 3.6rem;
      height: 3.6rem;
      border-radius: 50%;
      background-color: var(--swe-white);
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      top: 50%;
      right: 1.5rem;
      transform: translateY(-50%);

      svg {
         width: 2.4rem;
         height: 2.4rem;
         color: var(--swe-black);
      }
   }
`;

export const StyledBody = styled.div`
   padding: 1.5rem;
   column-gap: 1.5rem;
   display: flex;

   .button-group {
      display: flex;
      column-gap: 1.2rem;
      button {
         width: 100%;
      }
   }
`;

export const StyledGallery = styled.div`
   width: 50%;
`;

export const StyledContent = styled.div`
   width: 50%;
   display: flex;
   flex-direction: column;
   row-gap: 1.5rem;

   .color-wrap {
      display: flex;
      align-items: center;
      column-gap: 1.2rem;

      p {
         text-transform: capitalize;
      }
   }

   h5 {
   }

   p {
      white-space: pre-wrap;
   }
`;
