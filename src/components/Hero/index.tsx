import React from 'react';
import { Link } from 'react-router-dom';
import { Path, StyledHero } from './styles';

const Hero: React.FC<{
   content: string;
   path: string;
}> = ({ content, path }) => {
   return (
      <StyledHero>
         <div className="container">
            <Path>
               <Link to={'/'}>Home</Link>
               <span>{path}</span>
            </Path>
            <div className="text">
               <h3>{content}</h3>
            </div>
         </div>
      </StyledHero>
   );
};

export default React.memo(Hero);
