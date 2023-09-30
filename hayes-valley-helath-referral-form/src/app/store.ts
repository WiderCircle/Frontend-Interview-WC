import { configureStore } from '@reduxjs/toolkit';

import referralFormsReducer from './pages/referral-page/referralFormsSlice';

const store = configureStore({
    reducer: {
        referralForms: referralFormsReducer
    }
});
export type RootState = ReturnType<typeof store.getState>;
export default store;