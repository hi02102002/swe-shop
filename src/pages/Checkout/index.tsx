import Box from 'components/Box';
import Button from 'components/Button';
import InputField from 'components/InputField';
import ModalWrapper from 'components/ModalWrapper/ModalWrapper';
import Spinner from 'components/Spinner';
import { authSelector } from 'features/auth';
import { cartAction, cartsSelector } from 'features/cart';
import { useFormik } from 'formik';
import { useAppDispatch, useAppSelector } from 'hooks';
import _ from 'lodash';
import React, { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { StyledCheckout, StyledForm, StyledModal } from './Checkout.styles';

const Checkout = () => {
   const { currentUser } = useAppSelector(authSelector);
   const { carts } = useAppSelector(cartsSelector);
   const [showCompleted, setShowCompleted] = useState<boolean>(false);
   const [counter, setCounter] = useState<number>(5);
   const [loading, setLoading] = useState<boolean>(false);
   const dispatch = useAppDispatch();
   const navigate = useNavigate();

   const form = useFormik({
      initialValues: {
         fullName: currentUser?.displayName || '',
         address: '',
         numberPhone: '',
      },
      onSubmit: async ({ address, fullName, numberPhone }, { resetForm }) => {
         setLoading(true);
         await new Promise((resolve) => setTimeout(resolve, 2000));
         setShowCompleted(true);
         resetForm();
         setLoading(false);
      },
      validationSchema: Yup.object().shape({
         fullName: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('You must enter this field'),
         address: Yup.string().required('You must enter this field'),
         numberPhone: Yup.string()
            .matches(
               /(([03+[2-9]|05+[6|8|9]|07+[0|6|7|8|9]|08+[1-9]|09+[1-4|6-9]]){3})+[0-9]{7}\b/g,
               'Your number phone invalid'
            )
            .required('You must enter this field'),
      }),
   });

   useEffect(() => {
      let timer: any;

      if (showCompleted) {
         timer =
            counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
      }

      if (counter === 0) {
         dispatch(cartAction.removeAllCart(_));
         navigate('/products');
      }

      return () => clearInterval(timer);
   }, [counter, navigate, showCompleted, dispatch]);

   const total = useMemo(
      () =>
         carts.reduce(
            (prev, current) => prev + current.amount * current.price,
            0
         ),
      [carts]
   );

   return (
      <StyledCheckout>
         <Box className="main">
            <h4>SWE (STREETWEAREAZY)</h4>
            <h6>Contact information</h6>
            <Box className="user-info">
               <span>
                  {currentUser?.displayName || 'No name'} ({currentUser?.email})
               </span>
            </Box>
            <StyledForm onSubmit={form.handleSubmit}>
               <h6>Shipping address</h6>
               <InputField
                  typeInput="input"
                  label="Full name"
                  placeHolder="Full name"
                  className="input-field"
                  name="fullName"
                  onChange={form.handleChange}
                  value={form.values.fullName}
                  onBlur={form.handleBlur}
                  errorText={form.errors.fullName}
                  isError={form.touched && !!form.errors.fullName}
               />
               <InputField
                  typeInput="input"
                  label="Address"
                  placeHolder="Address"
                  className="input-field"
                  name="address"
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  value={form.values.address}
                  errorText={form.errors.address}
                  isError={form.touched && !!form.errors.address}
               />

               <InputField
                  typeInput="input"
                  label="Number phone"
                  placeHolder="Number phone"
                  className="input-field"
                  name="numberPhone"
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  value={form.values.numberPhone}
                  errorText={form.errors.numberPhone}
                  isError={form.touched && !!form.errors.numberPhone}
               />
               <Box className="btn-group">
                  <Button
                     type="submit"
                     disabled={!(form.isValid && form.dirty)}
                  >
                     {loading ? <Spinner /> : 'Completed order'}
                  </Button>
                  <Button
                     type="button"
                     onClick={() => {
                        navigate('/view-cart');
                     }}
                  >
                     Return cart
                  </Button>
               </Box>
            </StyledForm>
         </Box>
         <Box className="side">
            {carts.length > 0 && (
               <ul>
                  {carts.map((cart) => (
                     <li key={cart.id}>
                        <div>
                           <Box className="img-wrap">
                              <img
                                 src={cart.img}
                                 alt={cart.name}
                                 title={cart.name}
                              />
                              <span>{cart.amount}</span>
                           </Box>
                           <Box className="info">
                              <p>{cart.name}</p>
                              <span>{cart.size}</span>
                           </Box>
                        </div>
                        <span>${cart.price}.00</span>
                     </li>
                  ))}
               </ul>
            )}
            <Box className="total">
               <p>Total: </p>
               <p>${total}.00</p>
            </Box>
         </Box>
         {showCompleted && (
            <ModalWrapper>
               <StyledModal>
                  <h5>Your order successful</h5>
                  <p>
                     You will redirect products to continue shopping after 5s
                  </p>
                  <p>{'Thank for your order <3'} </p>
                  <Button disabled>{counter}s</Button>
               </StyledModal>
            </ModalWrapper>
         )}
      </StyledCheckout>
   );
};

export default Checkout;
