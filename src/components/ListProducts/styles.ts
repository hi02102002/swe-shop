import { motion } from 'framer-motion';
import styled from 'styled-components';

export const StyledListProducts = styled(motion.ul)<{
   col?: number;
}>`
   --col: ${(p) => p.col || 4};
   --gap: 1.5rem;
   display: flex;
   flex-wrap: wrap;
   margin-right: calc(-1 * var(--gap));
   gap: var(--gap);

   @media screen and (max-width: 1023.98px) {
      --col: ${(p) => (p.col ? p.col - 1 : 3)};
   }

   @media screen and (max-width: 767.98px) {
      --col: ${(p) => (p.col ? p.col - 2 : 2)};
   }

   @media screen and (max-width: 639.98px) {
      --col: ${(p) => (p.col ? p.col - 3 : 2)};
   }

   @media screen and (max-width: 374.98px) {
      --col: 1;
   }

   li {
      width: calc(100% / var(--col) - var(--gap));
   }
`;
