import { sweApi } from 'api/sweApi';
import Box from 'components/Box';
import Button from 'components/Button';
import InputField from 'components/InputField';
import Spinner from 'components/Spinner';
import { authSelector } from 'features/auth';
import { AnimatePresence } from 'framer-motion';
import { useAppSelector } from 'hooks';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { v4 } from 'uuid';
import InputRating from '../InputStart';
import { StyledFormReview } from './FormReview.styles';

const FormReview: React.FC<{
   onClose: () => any;
   productId: string;
}> = ({ onClose, productId }) => {
   const [rating, setRating] = useState<number>(0);
   const [title, setTitle] = useState<string>('');
   const [desc, setDesc] = useState<string>('');
   const [error, setError] = useState<string>('');
   const [success, setSuccess] = useState<string>('');
   const [loading, setLoading] = useState<boolean>(false);
   const { currentUser } = useAppSelector(authSelector);
   const formRef = useRef<HTMLFormElement | null>(null);

   const able = useMemo(() => {
      return rating !== 0 && title.trim().length > 0 && desc.trim().length > 0;
   }, [rating, title, desc]);

   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (!able) {
         setError('You must fill all field input!');
         setSuccess('');
         return;
      } else {
         try {
            setLoading(true);
            const { data } = await sweApi.addReview({
               content: desc,
               createdAt: new Date().toISOString(),
               id: v4(),
               name: currentUser?.displayName as string,
               productId: productId,
               star: rating,
               title: title,
               userId: currentUser?.uid as string,
            });
            setDesc('');
            setRating(0);
            setTitle('');
            setSuccess('Thank for your review!');
            setError('');
            setLoading(false);
            console.log(data);
         } catch (error) {
            console.log(error);
            setLoading(false);
            setSuccess('');
            setError('Something went wrong!');
         }
      }
   };

   useEffect(() => {
      return () => {
         setDesc('');
         setRating(0);
         setTitle('');
      };
   }, []);

   return (
      <AnimatePresence>
         <StyledFormReview onSubmit={handleSubmit} ref={formRef}>
            {error.trim().length > 0 && <p className="error">{error}</p>}
            {success.trim().length > 0 && <p className="success">{success}</p>}
            <InputRating rating={rating} setRating={setRating} label="Rating" />
            <InputField
               typeInput="input"
               label="Title"
               onChange={(e: any) => {
                  setTitle(e.target.value);
               }}
               value={title}
            />
            <InputField
               typeInput="textarea"
               label="Description"
               onChange={(e: any) => {
                  setDesc(e.target.value);
               }}
               value={desc}
            />
            <Box className="btn-group">
               <Button type="submit" disabled={loading}>
                  {loading ? <Spinner /> : 'Submit'}
               </Button>
               <Button type="button" onClick={onClose}>
                  Cancel
               </Button>
            </Box>
         </StyledFormReview>
      </AnimatePresence>
   );
};

export default FormReview;
