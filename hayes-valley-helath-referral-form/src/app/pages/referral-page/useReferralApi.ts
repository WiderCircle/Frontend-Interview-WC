import { useState, useCallback } from 'react';
import axios from 'axios';
import { referralFormData } from './referralFormsSlice';



const useReferralApi = () => {
    const [messageContent, setMessageContent] = useState('');
    const [messageType, setMessageType] = useState<'hidden' | 'success' | 'error'>('hidden');
    const [loading, setLoading] = useState<boolean>(false);

    const sendReferrals = useCallback(
        async (referralForms: referralFormData[]) => {
            setMessageType('hidden');
            setMessageContent('');

            try {
                const response = await axios.post('/api/referrals', referralForms);
                setMessageType('success');
                setMessageContent('');
                console.log('Referral POST response:', response.data);
            } catch (error) {
                console.error('Error sending referrals:', error);
                setMessageType('error');
                setMessageContent('An error ocurred');
            } finally {
                setLoading(false);
            }
        },
        []
    );

    return { sendReferrals, messageContent, messageType, loading };
};

export default useReferralApi;
