import { Box } from "@mui/material";
import { ReactNode } from "react";

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

interface WcAlertProps {
    children: ReactNode;
    type: 'hidden' | 'success' | 'error' | string;
}

const WcAlert = ({ children, type }: WcAlertProps) => {
    if (type !== 'hidden') {
        const alertColor = alertColors[type as 'success' | 'error'];
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
    }

    return null;
};

export default WcAlert;
