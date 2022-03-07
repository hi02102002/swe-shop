import Spinner from 'components/Spinner';
import React from 'react';
import { StyledLoader } from './styles';

const Loader = () => {
   return (
      <StyledLoader>
         <Spinner
            color="var(--swe-black)"
            width="3.6rem"
            height="3.6rem"
            widthLine="4px"
         />
      </StyledLoader>
   );
};

export default Loader;
