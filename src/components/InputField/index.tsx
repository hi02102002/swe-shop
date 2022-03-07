import React, { useState } from 'react';
import { StyledInputField } from './styles';

interface Props {
   label?: string;
   type?: 'email' | 'password' | 'text';
   placeHolder?: string;
   name?: string;
   onChange?: React.ChangeEventHandler<HTMLInputElement>;
   value?: string;
   require?: boolean;
   onFocus?: React.FocusEventHandler<HTMLInputElement>;
   onBlur?: React.FocusEventHandler<HTMLInputElement>;
   errorText?: string;
   isError?: boolean;
}

const InputField: React.FC<Props> = ({
   label,
   placeHolder,
   type,
   onFocus,
   onBlur,
   onChange,
   value,
   require,
   name,
   errorText,
   isError,
}) => {
   const [isFocus, setIsFocus] = useState<boolean>(false);

   const handleFocus = (e: React.FocusEvent<HTMLInputElement, Element>) => {
      setIsFocus(true);
      onFocus && onFocus(e);
   };
   const handleBlur = (e: React.FocusEvent<HTMLInputElement, Element>) => {
      setIsFocus(false);
      onBlur && onBlur(e);
   };
   return (
      <StyledInputField isFocus={isFocus} isError={isError}>
         {label && <label>{label}</label>}
         <input
            type={type}
            onFocus={handleFocus}
            onBlur={handleBlur}
            placeholder={placeHolder}
            onChange={onChange}
            value={value}
            required={require}
            name={name}
            autoComplete={'off'}
         />
         {isError && <p>{errorText}</p>}
      </StyledInputField>
   );
};

export default React.memo(InputField);
