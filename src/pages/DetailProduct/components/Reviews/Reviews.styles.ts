import styled from 'styled-components';

export const StyledReviews = styled.div`
   display: flex;
   flex-direction: column;
   row-gap: 2rem;
   max-width: 768px;
   width: 100%;
   margin: 0 auto;

   h5 {
      text-align: center;
   }

   .alter {
      text-align: center;
      font-size: 1.6rem;
      align-self: center;
   }

   .write-review {
      padding: 0 1.5rem;
      align-self: center;
   }
`;

export const ListReviews = styled.ul`
   display: flex;
   flex-direction: column;
   row-gap: 1.2rem;

   li:not(:last-child) {
      border-bottom: 1px solid var(--swe-grey-2);
   }
`;

export const Review = styled.div`
   display: flex;
   flex-direction: column;
   row-gap: 0.5rem;
   padding-bottom: 1.2rem;

   .title {
      font-size: 1.8rem;
   }

   .rate svg {
      color: #ffcc00;
   }
`;
