'use client'

import React, { useState } from 'react';
import { Container, Grid, Typography } from '@mui/material';
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
            return;//the delete button shouldn't be shown anyway.
        const updatedForms = referralForms.filter((form, index) => (index != indexToRemove));
        setReferralForms(updatedForms);
    }

    return (
        <Grid container spacing={0}>
            <Grid item xs={12} style={{ backgroundColor: '#fff' }}>
                <Container style={{ textAlign: 'center' }}>
                    <header>
                        <Typography variant="h1">Patient Referral Form</Typography>
                        <Typography variant="h2">Hayes Valley Health San Francisco</Typography>
                    </header>
                </Container>
            </Grid>
            <Grid item xs={12} style={{ textAlign: 'center' }}>
                <Container maxWidth="md" style={{ textAlign: 'center' }}>
                    <main>
                        <Typography variant="h3">Referral Patients</Typography>
                        <Typography variant="subtitle1">You can add up to five patients at a time</Typography>
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
                        <Button variant="text" onClick={addReferralForm}>
                            + Add another patient
                        </Button>
                        <Button variant="contained" style={{ display: 'block', width: '100%' }}>
                            Send Referrals
                        </Button>
                    </main>
                </Container>
            </Grid>
        </Grid>
    );
}
