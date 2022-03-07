import Box from 'components/Box';
import Hero from 'components/Hero';
import Layout from 'components/Layout';
import React from 'react';
import Login from './Login';
import Register from './Register';
import { StyledAuth, StyledWrap } from './styles';

const Auth = () => {
   return (
      <Layout>
         <Hero content="Login" />
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

export default Auth;
