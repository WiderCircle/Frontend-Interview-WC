import { useState, useCallback } from 'react';
import axios, { AxiosResponse } from 'axios';
import { ReferralFormData } from './referralFormsSlice';

export interface ReferralApiResult {
    messageContent: string;
    messageType: 'hidden' | 'success' | 'error';
    loading: boolean;
    sendReferrals: (referralForms: ReferralFormData[]) => Promise<void>;
}

const useReferralApi = (): ReferralApiResult => {
    const [messageContent, setMessageContent] = useState<string>('');
    const [messageType, setMessageType] = useState<'hidden' | 'success' | 'error'>('hidden');
    const [loading, setLoading] = useState<boolean>(false);

    const sendReferrals = useCallback(
        async (referralForms: ReferralFormData[]): Promise<void> => {
            setMessageType('hidden');
            setMessageContent('');
            setLoading(true);

            try {
                const response: AxiosResponse = await axios.post('/api/referrals', referralForms);
                setMessageType('success');
                setMessageContent('');
                console.log('Referral POST response:', response.data);
            } catch (error) {
                console.error('Error sending referrals:', error);
                setMessageType('error');
                setMessageContent('An error occurred');
            } finally {
                setLoading(false);
            }
        },
        []
    );

    return { sendReferrals, messageContent, messageType, loading };
};

export default useReferralApi;
