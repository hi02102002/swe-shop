import styled from 'styled-components';

export const StyledIconButton = styled.button`
   width: 3.6rem;
   height: 3.6rem;

   display: flex;
   justify-content: center;
   align-items: center;

   border-radius: 50%;
   border: 0;
   box-shadow: var(--swe-shadow);

   cursor: pointer;

   background-color: var(--swe-white);
   outline: 0;

   transition: all 0.3s ease;

   .tool-tip {
      position: absolute;
      right: calc(100% + 1rem);

      width: max-content;
      padding: 0.5rem 1rem;

      background-color: var(--swe-white);

      box-shadow: var(--swe-shadow);
      border-radius: 6px;

      opacity: 0;
      visibility: hidden;

      transition: all 0.3s ease;
   }

   svg {
      width: 2rem;
      height: 2rem;
      transition: all 0.3s ease;
   }

   &:hover {
      background-color: var(--swe-black);

      svg {
         color: var(--swe-white);
      }
      .tool-tip {
         opacity: 1;
         visibility: visible;
      }
   }
`;
