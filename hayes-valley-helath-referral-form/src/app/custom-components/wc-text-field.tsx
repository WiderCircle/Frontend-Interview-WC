import React from 'react';
import { BaseTextFieldProps, Box, FormControl, InputAdornment, InputLabel, SvgIconProps, TextField, TextFieldProps } from '@mui/material';
import { AccountCircle, BorderColor } from '@mui/icons-material';

interface CustomInputProps extends BaseTextFieldProps {
    Icon?: React.ComponentType<SvgIconProps>;
    placeholder: string;
}

function WcTextField({ Icon, required, placeholder, ...TextFieldProps }: CustomInputProps) {
    const placeholderText = (required ? `${placeholder}*` : placeholder)

    return (<>
        <Box sx={{ display: 'flex', alignItems: 'center', borderBottom: '1px solid #142B58' }}>
            <TextField
                fullWidth
                variant="standard"
                required
                sx={{
                    color: '#3A719B',
                    '& ::placeholder': {
                        color: '#3A719B',
                        fontWeight: 200
                    }
                }}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            {Icon && <Icon style={{ color: '#B8C7CC' }} />}
                        </InputAdornment>
                    ),
                    disableUnderline: true,
                    placeholder: placeholderText
                }}
                {...TextFieldProps}
            />
        </Box>
    </>
    );
}

export default WcTextField;
