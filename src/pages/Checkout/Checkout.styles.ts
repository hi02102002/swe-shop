import styled from 'styled-components';
export const StyledCheckout = styled.div`
   display: flex;

   @media screen and (max-width: 1023.98px) {
      flex-direction: column-reverse;
   }

   .main {
      width: 52%;
      display: flex;
      flex-direction: column;
      row-gap: 1.2rem;
      height: 100vh;
      padding: 5.6rem;

      @media screen and (max-width: 1023.98px) {
         width: 100%;
         height: 100%;
      }

      @media screen and (max-width: 767.98px) {
         padding: 3.2rem;
      }

      .user-info {
         color: var(--swe-grey-3);
      }
   }

   .side {
      width: 48%;
      background-color: var(--swe-grey-1);
      height: 100vh;
      padding: 5.6rem;
      display: flex;
      flex-direction: column;
      row-gap: 2.4rem;
      @media screen and (max-width: 1023.98px) {
         width: 100%;
         height: 100%;
      }

      @media screen and (max-width: 767.98px) {
         padding: 3.2rem;
      }
   }

   .side ul {
      display: flex;
      flex-direction: column;
      row-gap: 1rem;
      padding-bottom: 2.4rem;
      border-bottom: 1px solid;
   }

   .side ul li {
      display: flex;
      align-items: center;
      justify-content: space-between;
   }

   .side ul li > div {
      display: flex;
      align-items: center;
      column-gap: 2.4rem;
   }

   .side .img-wrap {
      position: relative;
      img {
         width: 100px;
         height: 100px;
         object-fit: cover;
         border-radius: 6px;
      }

      span {
         position: absolute;
         width: 2.4rem;
         height: 2.4rem;
         border-radius: 50%;
         background-color: var(--swe-orange);
         display: flex;
         justify-content: center;
         align-items: center;
         color: var(--swe-white);
         top: -1.2rem;
         right: -1.2rem;
      }
   }

   .side .info {
      display: flex;
      flex-direction: column;
      row-gap: 1rem;
   }

   .side .total {
      display: flex;
      align-items: center;
      justify-content: space-between;
   }
`;

export const StyledForm = styled.form`
   --gap: 1.2rem;
   display: flex;
   flex-direction: column;
   row-gap: var(--gap);

   & > .box {
      display: flex;
      align-items: center;
      column-gap: var(--gap);
   }
   .input-field {
      width: 100%;
   }

   .btn-group {
      button {
         padding: 0 1.5rem;
         min-width: 14rem;
      }
   }
`;

export const StyledModal = styled.div`
   padding: 2rem;
   background-color: var(--swe-white);
   width: 100%;
   max-width: 55rem;
   border-radius: 6px;
   text-align: center;
   display: flex;
   flex-direction: column;
   align-items: center;
   row-gap: 1.2rem;
   animation: modalZoomIn 0.3s ease;
   button {
      width: 8rem;
   }
`;
