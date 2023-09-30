

import React from 'react';
import { Box, TextField, InputAdornment, SvgIconProps, BaseTextFieldProps, TextFieldProps, StandardTextFieldProps } from '@mui/material';

interface CustomInputProps extends StandardTextFieldProps {
    Icon?: React.ComponentType<SvgIconProps>;
    placeholder: string;
}

const WcTextField: React.FC<CustomInputProps> = ({ Icon, required, placeholder, fullWidth = true, ...TextFieldProps }) => {
    const placeholderText = required ? `${placeholder}*` : placeholder;

    const textFieldStyles = {
        color: '#3A719B',
        '& ::placeholder': {
            color: '#3A719B',
            fontWeight: 200,
        },
    };

    return (
        <Box sx={{ display: 'flex', alignItems: 'center', borderBottom: '1px solid #142B58' }}>
            <TextField
                fullWidth={fullWidth}
                variant="standard"
                required={required}
                sx={textFieldStyles}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            {Icon && <Icon style={{ color: '#B8C7CC' }} />}
                        </InputAdornment>
                    ),
                    disableUnderline: true,
                    placeholder: placeholderText,
                }}
                {...TextFieldProps}
            />
        </Box>
    );
};

export default WcTextField;
