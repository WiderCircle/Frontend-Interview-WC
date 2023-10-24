import { Box } from "@mui/material";
import React from "react";

interface ReferralAlertProps {
  numReferrals: number;
}

const ReferralAlert = ({ numReferrals }: ReferralAlertProps) => {
  return (
    <Box
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        width: "62%",
        margin: "0 auto",
        height: "47px",
        background: "#25A575",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderBottomLeftRadius: "34.5px",
        borderBottomRightRadius: "34.5px",
      }}
    >
      Success! You have submitted {numReferrals} pending referrals. You will be
      notified once they&lsquo;ve been approved
    </Box>
  );
};

export default ReferralAlert;
