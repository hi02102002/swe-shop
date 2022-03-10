import React from 'react';
import { Link } from 'react-router-dom';
import { Path, StyledHero } from './styles';

const Hero: React.FC<{
   content: string;
}> = ({ content }) => {
   return (
      <StyledHero>
         <div className="container">
            <Path>
               <Link to={'/'}>Home</Link>
               <span>{window.location.pathname.replace('/', '')}</span>
            </Path>
            <div className="text">
               <h3>{content}</h3>
            </div>
         </div>
      </StyledHero>
   );
};

export default React.memo(Hero);
