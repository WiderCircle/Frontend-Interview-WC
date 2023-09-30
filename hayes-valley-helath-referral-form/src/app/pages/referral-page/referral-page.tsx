import React, { useState } from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import ReferralForm from './referral-form';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/app/store';
import { formCollapseAll, formAdded, formRemoved, formExpandLast, formToggleExpand } from './referralFormsSlice';


export default function ReferralPage() {
    const maxReferralForms = 5;//@todo extract to config
    const referralForms = useSelector((state: RootState) => state.referralForms);

    const dispatch = useDispatch();

    const handleAddFormClicked = () => {
        if (referralForms.length >= maxReferralForms)
            return;
        dispatch(
            formCollapseAll()
        );
        dispatch(
            formAdded({ expanded: true })
        );
        return;
    };

    const handleFormExpandClick = (key: number) => {
        dispatch(
            formToggleExpand({ key: key })
        )
    };

    const handleFormDeleteClick = (keyToRemove: number) => {
        dispatch(
            formRemoved({ key: keyToRemove })
        );
        dispatch(
            formExpandLast()
        );
    };

    return (<>
        <header>
            <Box display={'flex'} alignItems={'center'} py={'58px'} style={{ backgroundColor: '#fff' }}>
                <Box width={"100%"}>
                    <Typography variant="h1">Patient Referral Form</Typography>
                    <Typography variant="h2">Hayes Valley Health San Francisco</Typography>
                </Box>
            </Box >
        </header>
        <main>
            <Container maxWidth="md">
                <header style={{ padding: '20px' }}>
                    <Typography variant="h3">Referral Patients</Typography>
                    <Typography variant="subtitle1">You can add up to five patients at a time</Typography>
                </header>
                <main>
                    {referralForms.map((formState, index) => (
                        <div key={formState.key}>
                            <ReferralForm
                                formState={formState}
                                displayIndex={index + 1}
                                showUtilityButtons={referralForms.length > 1}
                                onExpandClick={() => handleFormExpandClick(formState.key)}
                                onDeleteClick={() => handleFormDeleteClick(formState.key)}
                            />
                        </div>
                    ))}
                </main>
                <footer>
                    <Box mb={4} mt={1} textAlign={'center'}>
                        <Button variant="text" onClick={handleAddFormClicked}>
                            + Add another patient
                        </Button>
                    </Box>
                    <Button variant="contained" style={{ display: 'block', width: '100%' }}>
                        Send Referrals
                    </Button>
                </footer>
            </Container>
        </main>
    </>);
}
