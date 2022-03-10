import styled from 'styled-components';

export const StyledHome = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   padding-top: var(--height-header);
   padding-bottom: 45px;
`;

export const Hero = styled.section`
   display: flex;
   align-items: center;
   justify-content: center;
   max-width: 800px;
   margin: 0 auto;
   gap: 2rem;

   @media screen and (max-width: 767.98px) {
      flex-direction: column;
   }

   .box {
      width: 50%;
      position: relative;

      @media screen and (max-width: 767.98px) {
         width: 100%;

         a {
            width: 100%;
         }
      }
   }

   .box a {
      img {
         width: 100%;
         height: 100%;
         object-fit: cover;
      }
      &::after {
         content: '';
         width: 100%;
         height: 100%;
         position: absolute;
         inset: 0;
         background-color: rgba(255, 255, 255, 0.5);
      }
      p {
         position: absolute;
         top: 50%;
         left: 50%;
         transform: translate(-50%, -50%);
         z-index: 2;
         font-size: 6rem;
         text-align: center;
         font-weight: 900;
         text-transform: uppercase;
         transition: all 0.3s;
      }
      &:hover {
         color: var(--swe-orange);
      }
   }
`;
