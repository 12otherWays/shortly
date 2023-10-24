import { Box, Divider, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Image from "next/image";

const OutterDiv = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
}));

const InnerDiv = styled(Box)(({ theme }) => ({
  padding: "80px",
  display: "flex",
  width: "85%",
  flexDirection: "column",
}));
const Heading = styled(Typography)(({ theme }) => ({
  fontSize: "16px",
  display: "flex",
  fontWeight: 400,
  marginBottom: "16px",
  textTransform: "capitalize",
  fontFamily: "'Montserrat', sans-serif",
}));
const Text = styled(Typography)(({ theme }) => ({
  color: "#79808C",
  textTransform: "capitalize",
  fontWeight: 400,
  display: "flex",
  letterSpacing: "0.3px",
  fontFamily: "'Montserrat', sans-serif",
  "&:hover": {
    color: "black",
  },
}));

function Footer() {
  const company_name = "shortly";
  return (
    <OutterDiv>
      <InnerDiv>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            marginBottom: "24px",
          }}
        >
          <Box sx={{ width: "50%" }}>
            <Box sx={{ display: "flex" }}>
              <Image />
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
            <Text sx={{ color: "black", textTransform: "none" }}>
              The email platform for SaaS
            </Text>
            <Box>
              <Image />
              <Image />
            </Box>
          </Box>
          <Box
            sx={{ width: "50%", display: "flex", justifyContent: "flex-end" }}
          >
            <Box sx={{ display: "inline-block" }}>
              <Heading>company</Heading>
              <Text sx={{ padding: "4px 0" }}>about us</Text>
              <Text sx={{ padding: "4px 0" }}>updates</Text>
              <Text sx={{ padding: "4px 0" }}>careers</Text>
              <Text sx={{ padding: "4px 0" }}>credits</Text>
            </Box>
          </Box>
        </Box>

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
