import React from 'react';
import { StyledButton } from './styles';

interface Props {
   onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
   type?: 'button' | 'submit' | 'reset';
   className?: string;
   disabled?: boolean;
}

const Button: React.FC<Props> = ({
   onClick,
   children,
   type,
   className,
   disabled,
}) => {
   return (
      <StyledButton
         disabled={disabled}
         onClick={onClick}
         type={type}
         className={className}
      >
         {children}
      </StyledButton>
   );
};

export default Button;
