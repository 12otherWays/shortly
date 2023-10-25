import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";

const OutterDiv = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  borderBottom: "1px solid #EBEBEB",
  position: "fixed",
  top: "0",
  width: "100%",
  backdropFilter: "blur(12px)",
  backgroundColor: "rgba(249, 250, 251, 0.3)",
  zIndex: "1000",
}));

const InnerDiv = styled(Box)(({ theme }) => ({
  display: "flex",
  width: "85%",
  justifyContent: "space-between",
  padding: "10px 80px",
  alignItems: "center",
}));
const Text = styled(Button)(({ theme }) => ({
  color: "#79808C",
  height: "30px",
  borderRadius: "6px",
  textTransform: "capitalize",
  fontWeight: 500,
  display: "flex",
  letterSpacing: "0.3px",
  fontSize: "14px",
  fontFamily: "'Poppins', sans-serif",
  "&:hover": {
    color: "black",
  },
}));

function Header() {
  return (
    <OutterDiv>
      <InnerDiv>
        <Box>
          <Typography>company name</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: "20px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: "30px",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text>docs</Text>
            <Text>pricing</Text>
            <Text>guide</Text>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "row", gap: "15px" }}>
            <Button
              variant="outlined"
              sx={{
                height: "30px",
                fontSize: "14px",
                letterSpacing: "1px",
                textTransform: "capitalize",
                borderColor: "#FE7D62",
                fontFamily: "'Poppins', sans-serif",
                color: "#FE7D62",
                "&:hover": {
                  borderColor: "#e67057",
                  backgroundColor: "rgba(230, 112, 87, 0.1)",
                },
              }}
            >
              log in
            </Button>
            <Button
              variant="contained"
              sx={{
                height: "30px",
                letterSpacing: "1px",
                fontSize: "14px",
                fontFamily: "'Poppins', sans-serif",
                textTransform: "capitalize",
                backgroundColor: "#FE7D62",
                "&:hover": {
                  backgroundColor: "#e67057",
                },
              }}
            >
              start
            </Button>
          </Box>
        </Box>
      </InnerDiv>
    </OutterDiv>
  );
}

export default Header;
