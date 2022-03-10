import React from 'react';
import { StyledIconButton } from './styles';

interface Props {
   className?: string;
   style?: React.CSSProperties;
   tooltip?: string;
   onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const IconButton: React.FC<Props> = ({
   style,
   className,
   children,
   tooltip,
   onClick,
}) => {
   return (
      <StyledIconButton
         className={className || ''}
         style={style}
         onClick={onClick}
      >
         {children}
         {tooltip && <div className="tool-tip">{tooltip}</div>}
      </StyledIconButton>
   );
};

export default IconButton;
