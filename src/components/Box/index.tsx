import React from 'react';

const Box: React.FC<{ className?: string }> = ({ className, children }) => {
   return <div className={`box ${className ? className : ''}`}>{children}</div>;
};

export default Box;
