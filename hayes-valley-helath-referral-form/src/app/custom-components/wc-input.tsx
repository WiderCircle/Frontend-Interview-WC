import React from 'react';
import Input, { InputProps } from '@mui/material/Input';
import { SvgIconProps } from '@mui/material';

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
    const placeholderText = required ? `${placeholder} *` : placeholder;

    return (
        <Input
            fullWidth
            startAdornment={Icon && <Icon fontSize="small" style={{ marginRight: '8px' }} />}
            placeholder={placeholderText}
            {...inputProps}
        />
    );
}

export default WcInput;
