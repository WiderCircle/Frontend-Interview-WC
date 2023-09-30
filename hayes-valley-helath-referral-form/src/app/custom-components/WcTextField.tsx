import React from 'react';
import { Box, TextField, InputAdornment, SvgIconProps, StandardTextFieldProps } from '@mui/material';

interface CustomInputProps extends StandardTextFieldProps {
    Icon?: React.ComponentType<SvgIconProps>;
    placeholder: string;
    required?: boolean;
}

const WcTextField: React.FC<CustomInputProps> = ({
    Icon,
    required = false,
    placeholder,
    fullWidth = true,
    ...TextFieldProps
}) => {
    const placeholderText = required ? `${placeholder}*` : placeholder;

    const inputStyles = {
        color: '#0B2B5B',
        '&::placeholder': {
            color: '#3A719B',
            fontWeight: 200,
        },
    };

    return (
        <Box sx={{ display: 'flex', alignItems: 'center', borderBottom: '1px solid #3A719B' }}>
            <TextField
                fullWidth={fullWidth}
                variant="standard"
                required={required}
                InputProps={{
                    sx: inputStyles,
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
