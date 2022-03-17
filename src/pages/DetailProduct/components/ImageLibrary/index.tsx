import React, { useEffect, useState } from 'react';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { v4 } from 'uuid';
import { StyledImageLibrary } from './ImageLibrary.styles';
const ImageLibrary: React.FC<{ images: string[] }> = ({ images }) => {
   const [imgActive, setImgActive] = useState(images?.[0]);

   useEffect(() => {
      setImgActive(images?.[0]);
   }, [images]);

   return (
      <StyledImageLibrary>
         <div className="current-img">
            <div className="inner">
               <img src={imgActive} alt="" />
            </div>
         </div>
         <Swiper slidesPerGroup={5} slidesPerView={5} spaceBetween={12}>
            {images?.map((img) => (
               <SwiperSlide
                  className={imgActive === img ? 'active' : ''}
                  key={v4()}
                  onClick={() => {
                     setImgActive(img);
                  }}
               >
                  <img src={img} alt="" />
               </SwiperSlide>
            ))}
         </Swiper>
      </StyledImageLibrary>
   );
};

export default ImageLibrary;
