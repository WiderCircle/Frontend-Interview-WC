import { useState, useCallback } from 'react';
import axios from 'axios';
import { referralFormData } from './referralFormsSlice';



const useReferralApi = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const sendReferrals = useCallback(
        async (referralForms: referralFormData[]) => {
            setLoading(true);
            setError(null);

            try {
                const response = await axios.post('/api/referrals', referralForms);

                console.log('Referral POST response:', response.data);
            } catch (error) {
                console.error('Error sending referrals:', error);
                setError('An error occurred while sending referrals.');
            } finally {
                setLoading(false);
            }
        },
        []
    );

    return { sendReferrals, loading, error };
};

export default useReferralApi;
