import styled from 'styled-components';

export const StyledAuth = styled.section`
   padding: 3.6rem 0;
`;

export const StyledWrap = styled.div`
   .box {
      display: flex;

      & > *:not(:last-child) {
         border-right: 1px solid var(--swe-grey);
      }
   }

   .section-login,
   .section-register {
      width: 50%;
      display: flex;
      flex-direction: column;
      row-gap: 2.4rem;
      padding: 8rem;
   }
`;

export const StyledHeadingSection = styled.h5`
   color: var(--swe-text-black);
`;

export const StyledForm = styled.form`
   display: flex;
   flex-direction: column;
   row-gap: 1.5rem;
`;

export const AuthErrorMessage = styled.p`
   text-align: center;
   color: red;
`;
