import React from 'react';
import {
    Box,
    Card,
    Container,
    Grid,
    Typography,
    Button,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/app/store';
import {
    formCollapseAll,
    formAdded,
    formRemoved,
    formExpandLast,
    formToggleExpand,
} from './referralFormsSlice';
import useReferralApi, { ReferralApiResult } from './useReferralApi';
import WcAlert from '@/app/custom-components/WcAlert';
import { config } from '../../config';
import ReferralForm from './referralForm';

export default function ReferralPage() {
    const referralFormsState = useSelector((state: RootState) => state.referralForms);
    const { sendReferrals, messageContent, messageType, loading }: ReferralApiResult = useReferralApi();
    const dispatch = useDispatch();

    const handleAddFormClicked = () => {
        if (referralFormsState.length >= config.maxReferrals) return;
        dispatch(formCollapseAll());
        dispatch(formAdded({ expanded: true }));
    };

    const handleFormExpandClick = (key: number) => {
        dispatch(formToggleExpand({ key }));
    };

    const handleFormDeleteClick = (keyToRemove: number) => {
        dispatch(formRemoved({ key: keyToRemove }));
        dispatch(formExpandLast());
    };

    const handleFormSubmission = () => {
        const referralForms = referralFormsState.map((referralFormState) => referralFormState.formData);
        sendReferrals(referralForms);
    };

    return (
        <>
            <header>
                <Box display="flex" alignItems="center" py="58px" style={{ backgroundColor: '#fff' }}>
                    <Box width="100%">
                        <Typography variant="h1">Patient Referral Form</Typography>
                        <Typography variant="h2">Hayes Valley Health San Francisco</Typography>
                    </Box>
                </Box>
            </header>
            <main>
                <Container maxWidth="md">
                    <WcAlert type={messageType}>{messageContent}</WcAlert>
                    <header style={{ padding: '40px' }}>
                        <Typography variant="h3">Referral Patients</Typography>
                        <Typography variant="subtitle1">You can add up to five patients at a time</Typography>
                    </header>
                    <main>
                        <Card>
                            {referralFormsState.map((formState, index) => (
                                <div key={formState.key}>
                                    <ReferralForm
                                        formState={formState}
                                        displayIndex={index + 1}
                                        showUtilityButtons={referralFormsState.length > 1}
                                        onExpandClick={() => handleFormExpandClick(formState.key)}
                                        onDeleteClick={() => handleFormDeleteClick(formState.key)}
                                    />
                                </div>
                            ))}
                        </Card>
                    </main>
                    <footer>
                        <Box mb={4} mt={1} textAlign="center">
                            <Button variant="text" onClick={handleAddFormClicked}>
                                + Add another patient
                            </Button>
                        </Box>
                        <Button
                            disabled={loading}
                            variant="contained"
                            onClick={handleFormSubmission}
                            style={{ display: 'block', width: '100%' }}
                        >
                            Send Referrals
                        </Button>
                        <Box pb="50px"></Box>
                    </footer>
                </Container>
            </main>
        </>
    );
}
