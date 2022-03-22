import Box from 'components/Box';
import Layout from 'components/Layout';
import { IMGS } from 'images';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Hero, StyledHome } from './styles';

const Home = () => {
   useEffect(() => {
      document.title = 'SWE';
   }, []);

   return (
      <Layout>
         <StyledHome>
            <div className="container">
               <Hero>
                  <Box>
                     <Link to="/products">
                        <img src={IMGS.homepageImgIndex1} alt="" />
                        <p>tất cả sản phẩm</p>
                     </Link>
                  </Box>
               </Hero>
            </div>
         </StyledHome>
      </Layout>
   );
};

export default React.memo(Home);
