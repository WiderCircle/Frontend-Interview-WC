import React, { useState } from 'react';
import {
    Box,
    Collapse,
    Grid,
    IconButton,
    IconButtonProps,
    Typography,
    styled,
} from '@mui/material';
import {
    AccountCircle,
    Cake,
    Delete,
    Email,
    ExpandMore as ExpandMoreIcon,
    Language,
    Phone,
} from '@mui/icons-material';
import WcTextField from '../../custom-components/wc-text-field';
import WcAddressInput from '@/app/custom-components/wc-address-input';

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

const ExpandMoreStyled = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

function ReferralForm({
    index,
    expanded,
    showUtilityButtons = false,
    onExpandClick,
    onDeleteClick,
}: ReferralFormProps) {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [contactLanguage, setContactLanguage] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [notes, setNotes] = useState('');

    return (
        <form style={{ backgroundColor: '#fff', marginTop: '10px' }}>
            <header>
                <Box display="flex" alignItems="center">
                    <Box width={50} textAlign="center">
                        <Typography
                            variant="h4"
                            sx={{
                                backgroundColor: 'green',
                                color: '#fff',
                                paddingTop: '25px',
                                paddingBottom: '25px',
                            }}
                        >
                            {index + 1}
                        </Typography>
                    </Box>
                    <Box flex={1} textAlign="left">
                        <Typography variant="h5" sx={{ paddingLeft: '10px' }}>
                            New Referral
                        </Typography>
                    </Box>
                    <Box width={100}>
                        {showUtilityButtons && (
                            <>
                                <IconButton onClick={onDeleteClick}>
                                    <Delete />
                                </IconButton>
                                <ExpandMoreStyled
                                    expand={expanded}
                                    onClick={onExpandClick}
                                    aria-expanded={expanded}
                                    aria-placeholder="show more"
                                >
                                    <ExpandMoreIcon />
                                </ExpandMoreStyled>
                            </>
                        )}
                    </Box>
                </Box>
            </header>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <Grid container>
                    <Grid item xs={0.5}></Grid>
                    <Grid item xs={11}>
                        <Grid container spacing={4} p="30px">
                            <Grid item xs={6}>
                                <WcTextField
                                    placeholder="First Name"
                                    required
                                    Icon={AccountCircle}
                                    onChange={(event) => { setFirstName(event.target.value); }}
                                    value={firstName}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <WcTextField
                                    placeholder="Last Name"
                                    required
                                    Icon={AccountCircle}
                                    onChange={(event) => { setLastName(event.target.value); }}
                                    value={lastName}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <WcTextField
                                    placeholder="Date of Birth"
                                    required
                                    Icon={Cake}
                                    onChange={(event) => { setDateOfBirth(event.target.value); }}
                                    value={dateOfBirth}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <WcTextField
                                    placeholder="Contact Language"
                                    required
                                    Icon={Language}
                                    onChange={(event) => { setContactLanguage(event.target.value); }}
                                    value={contactLanguage}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <WcTextField
                                    placeholder="Phone"
                                    required
                                    Icon={Phone}
                                    onChange={(event) => { setPhone(event.target.value); }}
                                    value={phone}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <WcTextField
                                    placeholder="Email"
                                    required
                                    Icon={Email}
                                    onChange={(event) => { setEmail(event.target.value); }}
                                    value={email}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <WcAddressInput
                                    address={address}
                                    setAddress={setAddress}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <WcTextField placeholder="Notes/Reason" />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Collapse>
        </form>
    );
}

export default ReferralForm;

