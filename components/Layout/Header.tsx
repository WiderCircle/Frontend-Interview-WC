import { Box, Typography } from "@mui/material";
import React from "react";

interface HeaderProps {
  hospitalName: string;
}

const Header = ({ hospitalName }: HeaderProps) => {
  return (
    <Box sx={{ padding: "56px 0", background: "white" }}>
      <Typography variant="h1" sx={{ textAlign: "center" }}>
        Patient Referral Form
      </Typography>
      <Typography variant="h2" sx={{ textAlign: "center" }}>
        {hospitalName}
      </Typography>
    </Box>
  );
};

export default Header;
