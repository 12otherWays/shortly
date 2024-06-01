"use client";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const OutterDiv = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  width: "100%",
  height: "100%",
  backgroundColor: "white"
}));

const InnerDiv = styled(Box)(({ theme }) => ({
  display: "flex",
  width: "100%",
  height: "100%",
  height: "100vh",
  alignItems: "center"
}));

const ParentDiv = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  maxWidth: "536px",
  width: "100%",
  padding: "30px 60px 0",
  [theme.breakpoints.down("sm")]: {
    padding: "30px"
  }
}));

function page() {
  return (
    <OutterDiv>
      <InnerDiv>
        <Box
          sx={{
            display: "flex",
            width: "100%",
            justifyContent: "center"
          }}
        >
          <ParentDiv>
            <Typography
              sx={{
                fontSize: "24px",
                fontFamily: "'Poppins', sans-serif",
                fontWeight: "800",
                marginBottom: "40px"
              }}
            >
              Coming Soon
            </Typography>
          </ParentDiv>
        </Box>
      </InnerDiv>
    </OutterDiv>
  );
}

export default page;
