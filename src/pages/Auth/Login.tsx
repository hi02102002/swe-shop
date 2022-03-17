import Button from 'components/Button';
import InputField from 'components/InputField';
import Spinner from 'components/Spinner';
import { authAction } from 'features/auth/auth.action';
import { authSelector } from 'features/auth/authSlice';
import { addToastItem } from 'features/toastSlide';
import { useFormik } from 'formik';
import { useAppDispatch, useAppSelector } from 'hooks';
import React, { useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { v4 } from 'uuid';
import * as Yup from 'yup';
import { AuthErrorMessage, StyledForm, StyledHeadingSection } from './styles';
const Login = () => {
   const dispatch = useAppDispatch();
   const navigate = useNavigate();
   const location = useLocation();

   const from = useMemo(() => {
      // @ts-ignore
      return location.state?.from?.pathname || '/';
   }, [location]);

   const {
      login: { error, loading },
   } = useAppSelector(authSelector);
   const form = useFormik({
      initialValues: {
         email: '',
         password: '',
      },
      onSubmit: async ({ email, password }, actions) => {
         const resultAction = await dispatch(
            authAction.handleLogin({
               email,
               password,
            })
         );
         if (authAction.handleLogin.fulfilled.match(resultAction)) {
            dispatch(
               addToastItem({
                  id: v4(),
                  content: 'Login successful',
                  type: 'SUCCESS',
               })
            );
            form.resetForm();
            navigate(from, { replace: true });
         }
         if (authAction.handleLogin.rejected.match(resultAction)) {
            dispatch(
               addToastItem({
                  id: v4(),
                  content: 'Login Error',
                  type: 'ERROR',
               })
            );
         }
      },
      validationSchema: Yup.object().shape({
         email: Yup.string()
            .email('Invalid email')
            .required('You must enter this field'),
      }),
   });

   return (
      <>
         <StyledHeadingSection>Log in</StyledHeadingSection>
         <StyledForm onSubmit={form.handleSubmit}>
            {error && <AuthErrorMessage>{error}</AuthErrorMessage>}
            <InputField
               label="Email address"
               placeHolder="Your email"
               type="email"
               name="email"
               onChange={form.handleChange}
               onBlur={form.handleBlur}
               value={form.values.email}
               isError={Boolean(form.errors.email && form.touched.email)}
               errorText={form.errors.email}
               typeInput="input"
            />
            <InputField
               label="Password"
               placeHolder="Password"
               type="password"
               name="password"
               onChange={form.handleChange}
               onBlur={form.handleBlur}
               value={form.values.password}
               typeInput="input"
            />
            <Button type="submit" disabled={!(form.isValid && form.dirty)}>
               {loading ? <Spinner /> : 'Login'}
            </Button>
         </StyledForm>
      </>
   );
};

export default Login;
