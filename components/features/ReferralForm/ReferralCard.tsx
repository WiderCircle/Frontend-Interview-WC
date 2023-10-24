import { Box, Card, CardContent, CardHeader, IconButton } from "@mui/material";
import Collapse from "@mui/material/Collapse";
import { ArrowDropDown, Delete } from "@material-ui/icons";

import React, { ReactNode, useState } from "react";
import { UseFieldArrayRemove } from "react-hook-form";

interface ReferralCardProps {
  children: ReactNode;
  header: string;
  cardIndex: number;
  remove: UseFieldArrayRemove;
}

const CardColorByIndex = [
  "#25A575",
  "#2595A5",
  "#3A719B",
  "#254B7A",
  "#142B58",
];

const ReferralCard = ({
  children,
  header,
  cardIndex,
  remove,
}: ReferralCardProps) => {
  const [expand, setExpand] = useState(true);
  return (
    <Card
      sx={{ padding: "12px 40px", position: "relative", marginTop: "32px" }}
    >
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
        {cardIndex + 1}
      </Box>
      <CardHeader
        sx={{ padding: "0 12px" }}
        title={
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {header}

            <Box>
              <IconButton onClick={() => remove(cardIndex)}>
                <Delete />
              </IconButton>
              <IconButton
                onClick={() => setExpand(!expand)}
                sx={{
                  marginLeft: "8px",
                  transform: expand ? "rotate(180deg)" : "rotate(0deg)",
                }}
              >
                <ArrowDropDown />
              </IconButton>
            </Box>
          </Box>
        }
      />
      <Collapse in={expand}>
        <CardContent sx={{ marginTop: "32px" }}>{children}</CardContent>
      </Collapse>
    </Card>
  );
};

export default ReferralCard;
