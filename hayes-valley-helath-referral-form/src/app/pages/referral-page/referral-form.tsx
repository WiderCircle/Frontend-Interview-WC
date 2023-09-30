import React from 'react';
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
import WcAddressInput, { AddressInfo } from '@/app/custom-components/wc-address-input';
import { formData, formState, formUpdated } from './referralFormsSlice';
import { useDispatch } from 'react-redux';

interface ReferralFormProps {
    formState: formState;
    displayIndex: number;
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
    formState,
    displayIndex,
    showUtilityButtons = false,
    onExpandClick,
    onDeleteClick,
}: ReferralFormProps) {
    const { key, expanded, formData } = formState;
    const { firstname, lastname, dateOfBirth, address1: address, language, notes } = formData;
    const phone = formData.contacts.find((contactMethod) => contactMethod.active && contactMethod.type === 'phone');
    const email = formData.contacts.find((contactMethod) => contactMethod.active && contactMethod.type === 'email');

    const dispatch = useDispatch();

    const handleFormUpdate = (key: keyof formData, value: string) => {
        const { ...newFormState } = formState;
        newFormState.formData = {
            ...formState.formData,
            [key]: value,
        }
        dispatch(
            formUpdated(newFormState)
        );
    };
    const handleAddressUpdate = (addressInfo: AddressInfo) => {
        const { ...newFormState } = formState;
        newFormState.formData = {
            ...formState.formData,
            address1: addressInfo.address || '',
            city: addressInfo.city || '',
            state: addressInfo.state || '',
            zipcode: addressInfo.zip || '',
            country: addressInfo.country || '',
        }
        dispatch(
            formUpdated(newFormState)
        );
    }
    const handleContactUpdate = (contactMethodType: 'phone' | 'email', value: string) => {
        const updatedContactMethod = {
            active: true,
            type: contactMethodType,
            value: value
        };
        const existingContacts = [
            ...formState.formData.contacts.filter((contactMethod) => contactMethod.type !== contactMethodType),
            updatedContactMethod
        ];

        const newFormState = {
            ...formState,
            formData: {
                ...formState.formData,
                contacts: existingContacts,
            },
        };
        dispatch(
            formUpdated(newFormState)
        );
    }

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
                            {displayIndex}
                        </Typography>
                    </Box>
                    <Box flex={1} textAlign="left">
                        <Typography variant="h5" sx={{ paddingLeft: '10px' }}>
                            New Referral {formState.key}
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
                                    onChange={(e) => handleFormUpdate('firstname', e.target.value)}
                                    value={firstname}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <WcTextField
                                    placeholder="Last Name"
                                    required
                                    Icon={AccountCircle}
                                    onChange={(e) => handleFormUpdate('lastname', e.target.value)}
                                    value={lastname}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <WcTextField
                                    placeholder="Date of Birth"
                                    required
                                    Icon={Cake}
                                    onChange={(e) => handleFormUpdate('dateOfBirth', e.target.value)}
                                    value={dateOfBirth}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <WcTextField
                                    placeholder="Contact Language"
                                    required
                                    Icon={Language}
                                    onChange={(e) => handleFormUpdate('language', e.target.value)}
                                    value={language}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <WcTextField
                                    placeholder="Phone"
                                    required
                                    Icon={Phone}
                                    onChange={(e) => handleContactUpdate('phone', e.target.value)}
                                    value={phone?.value}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <WcTextField
                                    placeholder="Email"
                                    required
                                    Icon={Email}
                                    onChange={(e) => handleContactUpdate('email', e.target.value)}
                                    value={email?.value}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <WcAddressInput
                                    address={address}
                                    onChange={(newValue: string) => handleFormUpdate('address1', newValue)}
                                    onAddressSelect={(addressInfo: AddressInfo) => handleAddressUpdate(addressInfo)}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <WcTextField
                                    placeholder="Notes/Reason"
                                    value={notes}
                                    onChange={(e) => handleFormUpdate('notes', e.target.value)}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Collapse>
        </form >
    );
}

export default ReferralForm;

