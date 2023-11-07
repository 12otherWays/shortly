import { Box, Divider, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Image from "next/image";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";

const OutterDiv = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
}));

const InnerDiv = styled(Box)(({ theme }) => ({
  padding: "80px",
  display: "flex",
  width: "85%",
  flexDirection: "column",
  [theme.breakpoints.down("md")]: {
    padding: "80px 40px",
    width: "90%",
  },
  [theme.breakpoints.down("sm")]: {
    padding: "80px 10px",
    width: "90%",
  },
  [theme.breakpoints.up("lg")]: {
    width: "1200px",
  },
}));
const ParentDiv = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  marginBottom: "24px",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
  },
}));
const LeftDiv = styled(Box)(({ theme }) => ({
  width: "50%",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
}));
const RightDiv = styled(Box)(({ theme }) => ({
  width: "50%",
  display: "flex",
  justifyContent: "flex-end",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    paddingTop: "40px",
    justifyContent: "flex-start",
  },
}));
const Heading = styled(Typography)(({ theme }) => ({
  fontSize: "16px",
  display: "flex",
  fontWeight: 600,
  marginBottom: "16px",
  textTransform: "capitalize",
  fontFamily: "'Poppins', sans-serif",
}));
const Text = styled(Typography)(({ theme }) => ({
  color: "#79808C",
  textTransform: "capitalize",
  fontWeight: 300,
  display: "flex",
  letterSpacing: "0.3px",
  fontFamily: "'Poppins', sans-serif",
  "&:hover": {
    color: "black",
  },
}));

function Footer() {
  const company_name = "shortly";
  return (
    <OutterDiv>
      <InnerDiv>
        <ParentDiv>
          <LeftDiv>
            <Box sx={{ display: "flex" }}>
              {/* <Image /> */}
              <Typography
                sx={{
                  textTransform: "capitalize",
                  fontSize: "24px",
                  fontWeight: "600",
                }}
              >
                {company_name}
              </Typography>
            </Box>
            <Text
              sx={{
                color: "black",
                textTransform: "none",
                fontFamily: "'Montserrat', sans-serif",
              }}
            >
              The email platform for SaaS
            </Text>
            <Box sx={{ display: "flex", gap: "10px" }}>
              <LinkedInIcon
                sx={{
                  color: "#A5ACB7",
                  "&:hover": {
                    color: "#0073B1",
                  },
                }}
              />

              <TwitterIcon
                sx={{
                  color: "#A5ACB7",
                  "&:hover": {
                    color: "#1C96E9",
                  },
                }}
              />
            </Box>
          </LeftDiv>
          <RightDiv>
            <Box sx={{ display: "inline-block" }}>
              <Heading>company</Heading>
              <Text sx={{ padding: "4px 0" }}>about us</Text>
              <Text sx={{ padding: "4px 0" }}>updates</Text>
              <Text sx={{ padding: "4px 0" }}>careers</Text>
              <Text sx={{ padding: "4px 0" }}>credits</Text>
            </Box>
          </RightDiv>
        </ParentDiv>

        <Divider />
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: "24px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: "40px",
            }}
          >
            <Text sx={{ fontSize: "14px", textTransform: "capitalize" }}>
              terms of service
            </Text>
            <Text sx={{ fontSize: "14px", textTransform: "capitalize" }}>
              privacy
            </Text>
          </Box>
          <Text
            sx={{
              fontSize: "14px",
              textTransform: "capitalize",
              "&:hover": {
                color: "#79808C",
              },
            }}
          >
            &#169; 2023 {company_name}
          </Text>
        </Box>
      </InnerDiv>
    </OutterDiv>
  );
}

export default Footer;
