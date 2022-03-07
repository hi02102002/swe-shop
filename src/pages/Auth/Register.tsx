import Button from 'components/Button';
import InputField from 'components/InputField';
import { useFormik } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import { useAppDispatch } from '../../hooks/userAppDispatch';
import { StyledForm, StyledHeadingSection } from './styles';
const Register = () => {
   const dispatch = useAppDispatch();
   const form = useFormik({
      initialValues: {
         firstName: '',
         lastName: '',
         email: '',
         password: '',
         confirmPassword: '',
      },
      onSubmit: ({ email, firstName, lastName, password }) => {
         // dispatch()
      },
      validationSchema: Yup.object().shape({
         email: Yup.string()
            .email('Invalid email')
            .required("This field can't blank"),
         // firstName:Yup.string().
      }),
   });

   return (
      <>
         <StyledHeadingSection>Register</StyledHeadingSection>
         <StyledForm>
            <InputField
               label="First name*"
               placeHolder="Text"
               type="text"
               name="firstName"
               value={form.values.firstName}
               onChange={form.handleChange}
            />
            <InputField
               label="Last name*"
               placeHolder="Text"
               type="text"
               name="lastName"
               value={form.values.lastName}
               onChange={form.handleChange}
            />
            <InputField
               label="Email address*"
               placeHolder="Email"
               type="email"
               name="email"
               value={form.values.email}
               onChange={form.handleChange}
            />
            <InputField
               label="Password*"
               placeHolder="Password"
               type="password"
               name="password"
               value={form.values.password}
               onChange={form.handleChange}
            />
            <InputField
               label="Confirm password*"
               placeHolder="Confirm password"
               type="password"
               name="confirmPassword"
               value={form.values.confirmPassword}
               onChange={form.handleChange}
            />
            <Button type="submit">Register</Button>
         </StyledForm>
      </>
   );
};

export default Register;
