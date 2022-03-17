import React from 'react';
import { StyledMenuHamburger } from './MenuHamburger.styles';

const MenuHamburger: React.FC<{
   isOpen: boolean;
   width?: string;
   height?: string;
}> = ({ isOpen }) => {
   return (
      <StyledMenuHamburger isOpen={isOpen}>
         <span></span>
         <span></span>
         <span></span>
      </StyledMenuHamburger>
   );
};

export default MenuHamburger;
