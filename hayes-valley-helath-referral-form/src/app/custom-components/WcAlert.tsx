import React from 'react';
import { Box } from '@mui/material';
import { ReactNode } from 'react';

const alertStyles = {
    borderRadius: '0',
    borderBottomLeftRadius: '50px',
    borderBottomRightRadius: '50px',
    height: '40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
};

const alertColors = {
    success: { backgroundColor: '#25A575', color: '#fff' },
    error: { backgroundColor: 'red', color: '#fff' },
};

type AlertType = 'hidden' | 'success' | 'error';

interface WcAlertProps {
    children: ReactNode;
    type: AlertType;
}

const WcAlert: React.FC<WcAlertProps> = ({ children, type }) => {
    if (type === 'hidden') {
        return null;
    }

    const alertColor = alertColors[type];
    return (
        <Box
            sx={{
                ...alertColor,
                ...alertStyles,
            }}
        >
            {children}
        </Box>
    );
};

export default WcAlert;
