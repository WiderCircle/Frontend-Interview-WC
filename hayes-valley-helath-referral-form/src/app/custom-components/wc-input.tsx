import React from 'react';
import Input, { InputProps } from '@mui/material/Input';
import { Box, FormControl, InputAdornment, InputLabel, SvgIconProps, TextField } from '@mui/material';
import { AccountCircle, BorderColor } from '@mui/icons-material';

interface CustomInputProps extends InputProps {
    Icon?: React.ComponentType<SvgIconProps>;
    required?: boolean;
    placeholder?: string;
}

/**
 * Adds a custom input field that allows us to include an optional icon as a start adornment.
 * @param {React.ComponentType<SvgIconProps>} Icon - An optional icon component to be displayed as the start adornment.
 * @param {InputProps} inputProps - Additional input properties for the underlying Material-UI Input component.
 * @param {boolean} required - Whether the input is required.
 * @param {string} placeholder - The placeholder text for the input.
 */
function WcInput({ Icon, required, placeholder, ...inputProps }: CustomInputProps) {
    const placeholderText = (required ? `${placeholder}*` : placeholder);

    return (<>
        <Box sx={{ display: 'flex', alignItems: 'center', borderBottom: '1px solid #142B58' }}>
            <Input
                fullWidth
                placeholder={placeholderText}
                required
                disableUnderline
                startAdornment={Icon && <Icon style={{ color: '#B8C7CC' }} />}
                sx={{
                    color: '#3A719B',
                    '& ::placeholder': {
                        color: '#3A719B',
                        fontWeight: 200
                    }
                }}
            />
        </Box>
    </>
    );
}

export default WcInput;
