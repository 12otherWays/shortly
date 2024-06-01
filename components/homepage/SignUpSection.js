"use client";
import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import { styled } from "@mui/material/styles";
import asset1 from "@/public/asset1.svg";
import asset2 from "@/public/asset2.svg";
import asset3 from "@/public/asset3.svg";
import Image from "next/image";

const OutterDiv = styled(Box)(({ theme }) => ({
  display: "flex",
  padding: "80px 0",
  justifyContent: "center",
  backgroundColor: "#FE7D62",
  backgroundImage: `url(${asset2.src}),url(${asset1.src})`,
  backgroundPosition: "90% 90%,0 0",
  backgroundRepeat: "no-repeat,no-repeat",
  backgroundSize: "8.625rem 8.625rem,15.4375rem 12rem"
}));

const InnerDiv = styled(Box)(({ theme }) => ({
  padding: "80px",
  display: "flex",
  width: "85%",
  justifyContent: "center",
  [theme.breakpoints.down("md")]: {
    padding: "140px 10px",
    width: "100%"
  },
  [theme.breakpoints.up("lg")]: {
    width: "1200px"
  }
}));
const ParentDiv = styled(Box)(({ theme }) => ({
  width: "70%",
  display: "flex",
  gap: "10px",
  flexDirection: "column",
  position: "relative",
  [theme.breakpoints.down("md")]: {
    width: "100%"
  }
}));

function SignUpSection() {
  const nineWidth = useMediaQuery("(min-width:900px)");

  return (
    <OutterDiv>
      <InnerDiv>
        <ParentDiv>
          <Typography
            sx={{
              fontSize: "36px",
              textAlign: "center",
              fontWeight: "600",
              color: "white",
              fontFamily: "'Poppins', sans-serif"
            }}
          >
            Effortlessly shorten, share, and track URLs with our easy to use URL
            shortener.
          </Typography>
          <Box sx={{ display: "flex", gap: "40px", justifyContent: "center" }}>
            <Button
              variant="contained"
              sx={{
                fontSize: "18px",
                borderRadius: "32px",
                height: "60px",
                width: "196px",
                padding: "16px 0",
                backgroundColor: "white",
                color: "#FE7D62",
                textTransform: "capitalize",
                fontFamily: "'Poppins', sans-serif",
                "&:hover": {
                  backgroundColor: "white"
                }
              }}
            >
              Sign Up
            </Button>
            <Button
              variant="outlined"
              sx={{
                fontSize: "18px",
                borderRadius: "32px",
                height: "60px",
                width: "196px",
                padding: "16px 0",
                borderColor: "white",
                color: "white",
                textTransform: "capitalize",
                fontFamily: "'Poppins', sans-serif",
                "&:hover": {
                  borderColor: "white"
                }
              }}
            >
              Book a tour
            </Button>
          </Box>
          {nineWidth && (
            <Image
              src={asset3}
              width={40}
              height={40}
              style={{ position: "absolute", top: "-20px", right: "-35px" }}
              alt="ui icon"
            />
          )}
        </ParentDiv>
      </InnerDiv>
    </OutterDiv>
  );
}

export default SignUpSection;
