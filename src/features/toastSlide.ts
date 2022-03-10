import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ToastItem } from 'shared/types';
import { RootState } from 'store';
const initialState: {
   toasts: ToastItem[];
} = {
   toasts: [],
};

const toastSlide = createSlice({
   name: 'toast',
   initialState,
   reducers: {
      addToastItem: (state, action: PayloadAction<ToastItem>) => {
         state.toasts.push(action.payload);
      },
      removeToastItem: (
         state,
         action: PayloadAction<{
            id: string;
         }>
      ) => {
         state.toasts = state.toasts.filter(
            (toast) => toast.id !== action.payload.id
         );
      },
   },
});

export const { addToastItem, removeToastItem } = toastSlide.actions;
export const toastSelector = (state: RootState) => state.toast;
export default toastSlide.reducer;
