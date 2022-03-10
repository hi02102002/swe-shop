import React from 'react';
import { StyledSizes } from './styles';

interface Props {
   sizes: string[];
   choseSize: string;
   setChoseSize: any;
}

const Sizes: React.FC<Props> = ({ sizes, choseSize, setChoseSize }) => {
   return (
      <StyledSizes>
         <h6>Sizes: </h6>
         {sizes.map((size) => (
            <div
               className={`size ${choseSize === size ? 'active' : ''}`}
               key={size}
               onClick={() => {
                  setChoseSize(size);
               }}
            >
               {size}
            </div>
         ))}
      </StyledSizes>
   );
};

export default React.memo(Sizes);
