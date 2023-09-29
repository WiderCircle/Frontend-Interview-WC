import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import PersonIcon from '@mui/icons-material/AccountCircle';
import CakeIcon from '@mui/icons-material/Cake';
import LanguageIcon from '@mui/icons-material/Translate';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WcInput from '../../app/custom-components/wc-input';

function ReferralForm() {
    return (
        <form style={{ backgroundColor: '#fff' }}>
            <header>
                <Grid container alignItems="center">
                    <Grid item xs={0.75}>
                        <Typography variant="h4" style={{ backgroundColor: 'green', color: '#fff', paddingTop: '25px', paddingBottom: '25px' }}>1</Typography>
                    </Grid>
                    <Grid item xs={11} style={{ textAlign: 'left', paddingLeft: '10px' }}>
                        <Typography variant="h5"> New Referral </Typography>
                    </Grid>
                </Grid>
            </header>
            <Grid container>
                <Grid item xs={0.5}></Grid>
                <Grid item xs={11}>
                    <Grid container spacing={2} style={{ padding: "30px" }}>
                        <Grid item xs={6} >
                            <WcInput
                                placeholder="First Name"
                                required
                                Icon={PersonIcon}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <WcInput
                                placeholder="Last Name"
                                required
                                Icon={PersonIcon}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <WcInput
                                placeholder="Date of Birth"
                                required
                                Icon={CakeIcon}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <WcInput
                                placeholder="Contact Language"
                                required
                                Icon={LanguageIcon}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <WcInput
                                placeholder="Phone"
                                required
                                Icon={PhoneIcon}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <WcInput
                                placeholder="Email"
                                required
                                Icon={EmailIcon}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <WcInput
                                placeholder="Address"
                                required
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <WcInput
                                placeholder="Notes/Reason"
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </form>
    );
}

export default ReferralForm;
