import Box from 'components/Box';
import React from 'react';
import { StyledFooter } from './styles';

const Footer = () => {
   return (
      <StyledFooter>
         <div className="container">
            <Box className="copy-right">
               ©2022 SWE, LLC. All Rights Reserved.
            </Box>
         </div>
      </StyledFooter>
   );
};

export default Footer;
