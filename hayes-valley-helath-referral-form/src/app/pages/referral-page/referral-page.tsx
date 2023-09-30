import React, { useState } from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import ReferralForm from './referral-form';
import Button from '@mui/material/Button';

export default function ReferralPage() {
    const maxReferralForms = 5;
    const [referralForms, setReferralForms] = useState([{ key: 1, expanded: true }]);

    const addReferralForm = () => {
        if (referralForms.length < maxReferralForms) {
            const updatedForms = referralForms.map((form) => {
                form.expanded = false
                return form;
            });
            updatedForms.push({ key: referralForms.length + 1, expanded: true });
            setReferralForms(updatedForms);
        }
    };

    const handleFormExpandClick = (index: number) => {
        const updatedForms = [...referralForms];
        updatedForms[index].expanded = !updatedForms[index].expanded;
        const updatedFormsNew = [...updatedForms];
        setReferralForms(updatedFormsNew);
    };

    const handleFormDeleteClick = (indexToRemove: number) => {
        if (referralForms.length <= 1)
            return;//the delete button shouldn't be shown anyway, but just in case!
        const updatedForms = referralForms.filter((form, index) => (index != indexToRemove));
        if (updatedForms.length === 1)
            updatedForms[0].expanded = true;

        setReferralForms(updatedForms);
    }

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
                    {referralForms.map((form, index) => (
                        <div key={form.key}>
                            <ReferralForm
                                index={index}
                                showUtilityButtons={referralForms.length > 1}
                                expanded={form.expanded}
                                onExpandClick={() => handleFormExpandClick(index)}
                                onDeleteClick={() => handleFormDeleteClick(index)}
                            />
                        </div>
                    ))}
                </main>
                <footer>
                    <Box mb={4} mt={1} textAlign={'center'}>
                        <Button variant="text" onClick={addReferralForm}>
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
