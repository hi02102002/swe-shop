import styled from 'styled-components';

export const StyledFormReview = styled.form`
   display: flex;
   flex-direction: column;
   row-gap: 1.2rem;
   max-width: 768px;
   width: 100%;
   margin: 0 auto;

   .btn-group {
      display: flex;
      align-items: center;
      column-gap: 1.2rem;

      button {
         padding: 0 1.5rem;
         min-width: 8.5rem;
      }
   }

   .error,
   .success {
      height: 3.6rem;
      padding: 0 1.5rem;
      text-align: center;
      align-self: center;
      font-size: 1.6rem;
      color: var(--swe-white);
      border-radius: 6px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
   }

   .error {
      background-color: rgba(255, 51, 51, 0.7);
   }

   .success {
      background-color: rgba(75, 181, 67, 0.7);
   }
`;
