import styled from 'styled-components';

export const StyledHero = styled.section`
   background-color: var(--swe-grey-1);

   .text {
      height: 14rem;
      display: flex;
      justify-content: center;
      align-items: center;
   }
`;

export const Path = styled.div`
   padding: 1.5rem 0;

   a {
      color: var(--swe-grey);

      &:hover {
         color: var(--swe-text-black);
      }
   }

   & > *:not(:last-child)::after {
      content: '/';
      margin: 0 0.4rem;
   }
`;
