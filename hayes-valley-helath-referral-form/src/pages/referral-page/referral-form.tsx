import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import PersonIcon from '@mui/icons-material/AccountCircle';
import CakeIcon from '@mui/icons-material/Cake';
import LanguageIcon from '@mui/icons-material/Translate';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import DeleteIcon from '@mui/icons-material/Delete';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import WcInput from '../../app/custom-components/wc-input';
import { IconButton, IconButtonProps, styled } from '@mui/material';
import Collapse from '@mui/material/Collapse';

interface ReferralFormProps {
    index: number;
    expanded: boolean;
    showUtilityButtons?: boolean;
    onExpandClick: () => void;
    onDeleteClick: () => void;
}

interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));


function ReferralForm({ index, expanded, showUtilityButtons = false, onExpandClick, onDeleteClick }: ReferralFormProps) {
    return (
        <form style={{ backgroundColor: '#fff', marginTop: '10px' }}>
            <header>
                <Grid container alignItems="center">
                    <Grid item xs={0.75}>
                        <Typography variant="h4" style={{ backgroundColor: 'green', color: '#fff', paddingTop: '25px', paddingBottom: '25px' }}>{index + 1}</Typography>
                    </Grid>
                    <Grid item xs={10} style={{ textAlign: 'left', paddingLeft: '10px' }}>
                        <Typography variant="h5"> New Referral </Typography>
                    </Grid>
                    {showUtilityButtons &&
                        <Grid item xs={0.75} style={{ display: 'flex' }}>
                            <IconButton
                                onClick={onDeleteClick}>
                                <DeleteIcon />
                            </IconButton>
                            <ExpandMore
                                expand={expanded}
                                onClick={onExpandClick} // Use the provided callback
                                aria-expanded={expanded}
                                aria-label="show more"
                            >
                                <ExpandMoreIcon />
                            </ExpandMore>
                        </Grid>
                    }
                </Grid>
            </header>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
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
            </Collapse>
        </form>
    );
}

export default ReferralForm;
