import Button from 'components/Button';
import InputField from 'components/InputField';
import Spinner from 'components/Spinner';
import { authSelector, handleLogin } from 'features/authSlice';
import { getAllCarts } from 'features/cartSlice';
import { addToastItem } from 'features/toastSlide';
import { useFormik } from 'formik';
import { useAppDispatch, useAppSelector } from 'hooks';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 } from 'uuid';
import * as Yup from 'yup';
import { AuthErrorMessage, StyledForm, StyledHeadingSection } from './styles';
const Login = () => {
   const dispatch = useAppDispatch();
   const navigate = useNavigate();
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
            handleLogin({
               email,
               password,
            })
         );
         if (handleLogin.fulfilled.match(resultAction)) {
            dispatch(
               addToastItem({
                  id: v4(),
                  content: 'Login successful',
                  type: 'SUCCESS',
               })
            );
            form.resetForm();
            navigate(-1);
            dispatch(getAllCarts(resultAction.payload.user.uid));
         }
         if (handleLogin.rejected.match(resultAction)) {
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
            />
            <InputField
               label="Password"
               placeHolder="Password"
               type="password"
               name="password"
               onChange={form.handleChange}
               onBlur={form.handleBlur}
               value={form.values.password}
            />
            <Button type="submit" disabled={!(form.isValid && form.dirty)}>
               {loading ? <Spinner /> : 'Login'}
            </Button>
         </StyledForm>
      </>
   );
};

export default Login;
