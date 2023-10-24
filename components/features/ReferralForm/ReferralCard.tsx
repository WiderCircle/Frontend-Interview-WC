import { Box, Card, CardContent, CardHeader } from "@mui/material";
import Collapse from "@mui/material/Collapse";

import React, { ReactNode, useState } from "react";

interface ReferralCardProps {
  children: ReactNode;
  header: string;
  cardIndex: number;
}

const CardColorByIndex = [
  "#25A575",
  "#2595A5",
  "#3A719B",
  "#254B7A",
  "#142B58",
];

const ReferralCard = ({ children, header, cardIndex }: ReferralCardProps) => {
  const [expand, setExpand] = useState(true);
  return (
    <Card sx={{ padding: "16px 64px", position: "relative" }}>
      <Box
        sx={{
          position: "absolute",
          left: 0,
          top: 0,
          height: "64px",
          width: "40px",
          background: CardColorByIndex[cardIndex],
          overflow: "auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
        }}
      >
        1
      </Box>
      <CardHeader
        sx={{ padding: 0 }}
        title={header}
        onClick={() => setExpand(!expand)}
      />
      <Collapse in={expand}>
        <CardContent>{children}</CardContent>
      </Collapse>
    </Card>
  );
};

export default ReferralCard;
