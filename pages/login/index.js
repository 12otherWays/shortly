import {
  Avatar,
  Box,
  Button,
  Divider,
  TextField,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Image from "next/image";
import { useState } from "react";
import Google from "../../public/google.png";
import { useRouter } from "next/router";
import ArrowBackIosOutlinedIcon from "@mui/icons-material/ArrowBackIosOutlined";

const OutterDiv = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  width: "100%",
  height: "100%",
  backgroundColor: "white",
}));

const InnerDiv = styled(Box)(({ theme }) => ({
  display: "flex",
  width: "100%",
  height: "100%",
  height: "100vh",
  alignItems: "center",
}));

const Text = styled(Typography)(({ theme }) => ({
  fontSize: "16px",
  fontWeight: "600",
  fontFamily: "'Poppins', sans-serif",
  marginBottom: "8px",
}));

function index() {
  const router = useRouter();
  const [checked, setChecked] = useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  return (
    <OutterDiv>
      <InnerDiv>
        <Box
          sx={{
            display: "flex",
            width: "100%",
            height: "fit-content",
            flexDirection: "row",
          }}
        >
          <Box sx={{ width: "30%" }}></Box>
          <Box sx={{ display: "flex", width: "70%" }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                maxWidth: "536px",
                width: "100%",
                padding: "30px 60px 0",
              }}
            >
              <Typography
                sx={{
                  fontSize: "24px",
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: "800",
                  marginBottom: "40px",
                }}
              >
                Sign up to Shortly
              </Typography>

              <Button
                variant="contained"
                sx={{
                  borderRadius: "50px",
                  padding: "15px 100px",
                  display: "flex",
                  gap: "15px",
                  fontSize: "14px",
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: "500",
                  textTransform: "none",
                  color: "black",
                  border: "thin solid rgba(0,0,0,0.15)",
                  backgroundColor: "white",
                  "&:hover": {
                    border: "thin solid rgba(0,0,0,0.15)",
                    backgroundColor: "white",
                  },
                }}
              >
                <Image src={Google} alt="google icon" height={20} width={20} />
                Sign up with Google
              </Button>
              <Box
                sx={{
                  display: "flex",
                  width: "100%",
                  height: "100%",
                  alignItems: "center",
                  textAlign: "center",
                  justifyContent: "center",
                  margin: "30px 0 10px",
                }}
              >
                <Divider sx={{ flexGrow: 1 }} />
                <Typography
                  sx={{
                    fontSize: "14px",
                    padding: "0 10px",
                    color: "rgba(0,0,0,0.32)",
                    fontFamily: "'Poppins', sans-serif",
                  }}
                >
                  or sign in with email
                </Typography>
                <Divider sx={{ flexGrow: 1 }} />
              </Box>
              <Box sx={{ marginTop: "10px" }}>
                <Text>Username or Email</Text>
                <TextField
                  id="outlined-size-small"
                  defaultValue="Small"
                  hiddenLabel
                  sx={{
                    height: "60px",
                    width: "100%",
                    // borderRadius: "0"
                  }}
                  InputLabelProps={{
                    sx: {
                      color: "#003566",
                      textTransform: "capitalize",
                    },
                  }}
                  InputProps={{
                    sx: {
                      "& fieldset": {
                        borderColor: "#e7e7e9",
                        borderWidth: "2px",
                        borderRadius: "12px",
                      },
                      "&:focus-within fieldset, &:focus-visible fieldset": {
                        border: "2px solid #FE7D62!important",
                        // borderRadius: 0,
                      },
                    },
                  }}
                  inputProps={{
                    sx: {
                      color: "#FE7D62",
                      fontSize: "18px",
                    },
                  }}
                />
              </Box>
              <Box sx={{ marginTop: "10px" }}>
                <Text>Password</Text>
                <TextField
                  id="outlined-size-small"
                  defaultValue="Small"
                  hiddenLabel
                  sx={{
                    height: "60px",
                    width: "100%",
                    // borderRadius: "0"
                  }}
                  InputLabelProps={{
                    sx: {
                      color: "#003566",
                      textTransform: "capitalize",
                    },
                  }}
                  InputProps={{
                    sx: {
                      "& fieldset": {
                        borderColor: "#e7e7e9",
                        borderWidth: "2px",
                        borderRadius: "12px",
                      },
                      "&:focus-within fieldset, &:focus-visible fieldset": {
                        border: "2px solid #FE7D62!important",
                        // borderRadius: 0,
                      },
                    },
                  }}
                  inputProps={{
                    sx: {
                      color: "#FE7D62",
                      fontSize: "18px",
                    },
                  }}
                />
              </Box>
              <Button
                variant="outlined"
                sx={{
                  color: "white",
                  marginTop: "30px",
                  backgroundColor: "black",
                  borderRadius: "50px",
                  padding: "15px 100px",
                  display: "flex",
                  gap: "15px",
                  fontSize: "14px",
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: "500",
                  textTransform: "none",
                  marginBottom: "20px",
                  "&:hover": {
                    backgroundColor: "rgba(0,0,0,0.82)",
                  },
                }}
              >
                Sign In
              </Button>
              <Box>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontFamily: "'Poppins', sans-serif",
                    textAlign: "center",
                  }}
                >
                  Don't have an account?{" "}
                  <span
                    onClick={() => router.push("/signup")}
                    style={{
                      textDecoration: "underline",
                      cursor: "pointer",
                    }}
                  >
                    Sign Up
                  </span>
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </InnerDiv>
    </OutterDiv>
  );
}

export default index;
