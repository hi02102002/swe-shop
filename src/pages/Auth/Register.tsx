import Button from 'components/Button';
import InputField from 'components/InputField';
import Spinner from 'components/Spinner';
import { authAction, authSelector } from 'features/auth';
import { addToastItem } from 'features/toastSlide';
import { useFormik } from 'formik';
import { useAppSelector } from 'hooks';
import React, { useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { v4 } from 'uuid';
import * as Yup from 'yup';
import { useAppDispatch } from '../../hooks/userAppDispatch';
import { AuthErrorMessage, StyledForm, StyledHeadingSection } from './styles';
const Register = () => {
   const dispatch = useAppDispatch();
   const navigate = useNavigate();
   const location = useLocation();

   const from = useMemo(
      // @ts-ignore
      () => location.state?.from?.pathname || '/',
      [location]
   );
   const {
      register: { error, loading },
   } = useAppSelector(authSelector);
   const form = useFormik({
      initialValues: {
         firstName: '',
         lastName: '',
         email: '',
         password: '',
         confirmPassword: '',
      },
      onSubmit: async ({ email, firstName, lastName, password }) => {
         const resultAction = await dispatch(
            authAction.handleRegister({
               email,
               password,
               firstName,
               lastName,
            })
         );
         if (authAction.handleRegister.fulfilled.match(resultAction)) {
            dispatch(
               addToastItem({
                  id: v4(),
                  content: 'Register successful',
                  type: 'SUCCESS',
               })
            );
            form.resetForm();
            navigate(from, { replace: true });
         }

         if (authAction.handleRegister.rejected.match(resultAction)) {
            dispatch(
               addToastItem({
                  id: v4(),
                  content: 'Register error',
                  type: 'ERROR',
               })
            );
         }
      },
      validationSchema: Yup.object().shape({
         firstName: Yup.string().required('You must enter this field'),
         lastName: Yup.string().required('You must enter this field'),
         email: Yup.string()
            .email('Invalid email')
            .required('You must enter this field'),
         password: Yup.string()
            .min(8, 'Password must at least 8 letter')
            .required('You must enter this field'),
         confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Password must match')
            .required('You must enter this field'),
      }),
   });

   return (
      <>
         <StyledHeadingSection>Register</StyledHeadingSection>
         <StyledForm onSubmit={form.handleSubmit}>
            {error && <AuthErrorMessage>{error}</AuthErrorMessage>}
            <InputField
               label="First name*"
               placeHolder="Text"
               type="text"
               name="firstName"
               value={form.values.firstName}
               onChange={form.handleChange}
               onBlur={form.handleBlur}
               isError={Boolean(
                  form.errors.firstName && form.touched.firstName
               )}
               errorText={form.errors.firstName}
               typeInput="input"
            />
            <InputField
               label="Last name*"
               placeHolder="Text"
               type="text"
               name="lastName"
               value={form.values.lastName}
               onChange={form.handleChange}
               onBlur={form.handleBlur}
               isError={Boolean(form.errors.lastName && form.touched.lastName)}
               errorText={form.errors.lastName}
               typeInput="input"
            />
            <InputField
               label="Email address*"
               placeHolder="Email"
               type="email"
               name="email"
               value={form.values.email}
               onChange={form.handleChange}
               onBlur={form.handleBlur}
               isError={Boolean(form.errors.email && form.touched.email)}
               errorText={form.errors.email}
               typeInput="input"
            />
            <InputField
               label="Password*"
               placeHolder="Password"
               type="password"
               name="password"
               value={form.values.password}
               onChange={form.handleChange}
               onBlur={form.handleBlur}
               isError={Boolean(form.errors.password && form.touched.password)}
               errorText={form.errors.password}
               typeInput="input"
            />
            <InputField
               label="Confirm password*"
               placeHolder="Confirm password"
               type="password"
               name="confirmPassword"
               value={form.values.confirmPassword}
               onChange={form.handleChange}
               onBlur={form.handleBlur}
               isError={Boolean(
                  form.errors.confirmPassword && form.touched.confirmPassword
               )}
               errorText={form.errors.confirmPassword}
               typeInput="input"
            />
            <Button type="submit" disabled={!(form.isValid && form.dirty)}>
               {loading ? <Spinner /> : 'Register'}
            </Button>
         </StyledForm>
      </>
   );
};

export default React.memo(Register);
