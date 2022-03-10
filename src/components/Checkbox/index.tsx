import React from 'react';
import { StyledCheckbox } from './styles';

const Checkbox: React.FC<{
   value: string;
   onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
   label: string;
   checked?: boolean;
   reverse?: boolean;
   name?: string;
}> = ({ value, onChange, label, checked, reverse, name }) => {
   return (
      <StyledCheckbox reverse={reverse}>
         <input
            type="checkbox"
            id={value}
            value={value}
            onChange={onChange}
            checked={checked}
            name={name}
         />
         <label htmlFor={value}>{label}</label>
      </StyledCheckbox>
   );
};

export default Checkbox;
