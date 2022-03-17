import ClickAwayListener from 'components/ClickAwayListener';
import styled from 'styled-components';

export const StyledFilterHeader = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
`;

export const StyledSort = styled.div`
   position: relative;
   width: max-content;

   &:hover {
      button {
         background-color: var(--swe-black);
         color: var(--swe-white);
      }
   }

   button {
      padding: 1.2rem;
      min-width: 17.5rem;
      border-radius: 6px;
      background-color: var(--swe-white);
      border: 1px solid var(--swe-grey);
      color: var(--swe-black);
      text-transform: unset;

      &:hover {
         background-color: var(--swe-black);
      }
   }
`;

export const StyledLayout = styled.div`
   display: flex;
   align-items: center;
   column-gap: 1.2rem;

   @media screen and (max-width: 767.98px) {
      display: none;
   }

   button {
      border: 0;
      background-color: transparent;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
   }
`;

export const StyledDropdown = styled(ClickAwayListener)`
   position: absolute;
   z-index: 100;
   background-color: var(--swe-white);
   width: 100%;
   padding: 1.2rem 0.7rem;
   border-radius: 6px;
   box-shadow: var(--swe-shadow);
   top: calc(100% + 1.2rem);

   ul {
      display: flex;
      flex-direction: column;
      row-gap: 1rem;
   }

   li {
      width: 100%;
      cursor: pointer;
      padding: 0.5rem;
      border-radius: 6px;
      transition: all 0.3s ease;

      &.active {
         background-color: var(--swe-orange);
         color: var(--swe-white);
      }
   }
`;
