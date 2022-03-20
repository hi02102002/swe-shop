import styled from 'styled-components';

export const StyledAuth = styled.section`
   padding: 3.6rem 0;
`;

export const StyledWrap = styled.div`
   .box {
      display: flex;
      @media screen and (max-width: 767.98px) {
         flex-direction: column;
         row-gap: 4rem;
      }

      & > *:not(:last-child) {
         border-right: 1px solid var(--swe-grey);

         @media screen and (max-width: 767.98px) {
            border: 0;
         }
      }
   }

   .section-login,
   .section-register {
      width: 50%;
      display: flex;
      flex-direction: column;
      row-gap: 2.4rem;
      padding: 8rem;

      @media screen and (max-width: 1023.98px) {
         padding: 4rem;
      }

      @media screen and (max-width: 767.98px) {
         width: 100%;
         padding: 0;

         h5 {
            text-align: center;
         }
      }

      @media screen and (max-width: 374.98px) {
         padding: 0;
      }
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
