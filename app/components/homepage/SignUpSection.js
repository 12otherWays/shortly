import { Box, Button, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import asset1 from "../../../public/asset1.svg";
import asset2 from "../../../public/asset2.svg";
import asset3 from "../../../public/asset3.svg";
import Image from "next/image";

const OutterDiv = styled(Box)(({ theme }) => ({
  display: "flex",
  padding: "80px 0",
  justifyContent: "center",
  backgroundColor: "#FE7D62",
  backgroundImage: `url(${asset2.src}),url(${asset1.src})`,
  backgroundPosition: "90% 90%,0 0",
  backgroundRepeat: "no-repeat,no-repeat",
  backgroundSize: "8.625rem 8.625rem,15.4375rem 12rem",
}));

const InnerDiv = styled(Box)(({ theme }) => ({
  padding: "80px",
  display: "flex",
  width: "85%",
  justifyContent: "center",
}));

function SignUpSection() {
  return (
    <OutterDiv>
      <InnerDiv>
        <Box
          sx={{
            width: "70%",
            display: "flex",
            gap: "10px",
            flexDirection: "column",
            position: "relative",
          }}
        >
          <Typography
            sx={{
              fontSize: "36px",
              textAlign: "center",
              fontWeight: "600",
              color: "white",
              fontFamily: "'Poppins', sans-serif",
            }}
          >
            Start uncovering problems that matter and build impactful products.
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
                  backgroundColor: "white",
                },
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
                  borderColor: "white",
                },
              }}
            >
              Book a tour
            </Button>
          </Box>
          <Image
            src={asset3}
            width={40}
            height={40}
            style={{ position: "absolute", top: "-20px", right: "-35px" }}
          />
        </Box>
      </InnerDiv>
    </OutterDiv>
  );
}

export default SignUpSection;
