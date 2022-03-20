import styled from 'styled-components';

export const StyledFilterSidebar = styled.aside`
   width: 20rem;
   flex-shrink: 0;
   & > .box,
   .filter-section,
   ul {
      display: flex;
      flex-direction: column;
      row-gap: 2.4rem;
   }

   .filter-section {
      row-gap: 1.2rem;
   }

   ul {
      row-gap: 0.5rem;
   }
`;
