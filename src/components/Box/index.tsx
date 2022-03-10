import React from 'react';

const Box: React.FC<{
   className?: string;
   sx?: React.CSSProperties;
   onClick?: React.MouseEventHandler<HTMLDivElement>;
}> = ({ className, children, sx, onClick }) => {
   return (
      <div
         className={`box ${className ? className : ''}`}
         style={sx}
         onClick={onClick}
      >
         {children}
      </div>
   );
};

export default Box;
