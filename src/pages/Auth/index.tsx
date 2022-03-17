import Box from 'components/Box';
import Hero from 'components/Hero';
import Layout from 'components/Layout';
import { authSelector } from 'features/auth';
import { useAppSelector } from 'hooks';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import { StyledAuth, StyledWrap } from './styles';

const Auth = () => {
   const navigate = useNavigate();
   const { accessToken } = useAppSelector(authSelector);

   useEffect(() => {
      document.title = 'Login - Register';
   }, []);

   useEffect(() => {
      if (accessToken) {
         navigate(-1);
      }
   }, [accessToken, navigate]);

   return (
      <Layout>
         <Hero content="Login - Register" path="Login - Register" />
         <div className="container">
            <StyledAuth>
               <StyledWrap>
                  <Box>
                     <div className="section-login">
                        <Login />
                     </div>
                     <div className="section-register">
                        <Register />
                     </div>
                  </Box>
               </StyledWrap>
            </StyledAuth>
         </div>
      </Layout>
   );
};

export default React.memo(Auth);
