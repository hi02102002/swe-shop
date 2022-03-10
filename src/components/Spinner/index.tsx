import React from 'react';
import { StyledSpinner } from './styles';

const Spinner: React.FC<{
   color?: string;
   widthLine?: string;
   width?: string;
   height?: string;
}> = ({ color, widthLine, width, height }) => {
   return (
      <StyledSpinner
         color={color}
         width={width}
         height={height}
         widthLine={widthLine}
      ></StyledSpinner>
   );
};

export default Spinner;
