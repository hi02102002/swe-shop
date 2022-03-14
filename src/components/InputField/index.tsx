import React, { useState } from 'react';
import { StyledInputField } from './styles';

interface Props {
   label?: string;
   type?: 'email' | 'password' | 'text';
   placeHolder?: string;
   name?: string;
   onChange?: any;
   value?: string;
   require?: boolean;
   onFocus?: any;
   onBlur?: any;
   errorText?: string;
   isError?: boolean;
   typeInput?: 'textarea' | 'input';
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
   typeInput,
}) => {
   const [isFocus, setIsFocus] = useState<boolean>(false);

   const handleFocus = (
      e:
         | React.FocusEvent<HTMLInputElement>
         | React.ChangeEvent<HTMLTextAreaElement>
   ) => {
      setIsFocus(true);
      onFocus && onFocus(e);
   };
   const handleBlur = (
      e:
         | React.FocusEvent<HTMLInputElement, Element>
         | React.ChangeEvent<HTMLTextAreaElement>
   ) => {
      setIsFocus(false);
      onBlur && onBlur(e);
   };
   return (
      <StyledInputField isFocus={isFocus} isError={isError}>
         {label && <label>{label}</label>}
         {typeInput === 'input' && (
            <input
               className="input"
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
         )}
         {typeInput === 'textarea' && (
            <textarea
               className="input"
               onFocus={handleFocus}
               onBlur={handleBlur}
               placeholder={placeHolder}
               onChange={onChange}
               value={value}
               required={require}
               name={name}
               autoComplete={'off'}
            />
         )}
         {isError && <p>{errorText}</p>}
      </StyledInputField>
   );
};

export default React.memo(InputField);
