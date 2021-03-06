import styled from 'styled-components';

export const StyledImageLibrary = styled.div`
   flex-shrink: 0;

   @media screen and (max-width: 767.98px) {
      width: 80% !important;
   }

   @media screen and (max-width: 639.98px) {
      width: 100% !important;
   }

   .current-img {
      border: 1px solid var(--swe-grey);
      position: relative;
      padding: 50%;
      .inner {
         position: absolute;
         inset: 0;
      }

      img {
         width: 100%;
         height: 100%;
         object-fit: contain;
         animation: fadeIn 0.3s ease;
      }
   }

   .swiper {
      margin-top: 1.2rem;
   }

   .swiper-slide {
      cursor: pointer;
      border: 1px solid var(--swe-grey);
      height: 100%;

      &.active {
         border: 1px solid var(--swe-black);
      }
   }
`;
