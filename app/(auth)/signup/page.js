"use client";
import {
  Box,
  Button,
  Checkbox,
  Divider,
  TextField,
  Typography,
  useMediaQuery
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Google from "@/public/google.png";
import Image from "next/image";
import { useState } from "react";
import ArrowBackIosOutlinedIcon from "@mui/icons-material/ArrowBackIosOutlined";
import { useRouter } from "next/navigation";

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
  height: "100vh",
  alignItems: "center"
}));

const ParentDiv = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  maxWidth: "536px",
  width: "100%",
  padding: "30px 60px 0",
  marginTop: "30px",
  [theme.breakpoints.down("sm")]: {
    padding: "30px"
  }
}));

const Text = styled(Typography)(({ theme }) => ({
  fontSize: "16px",
  fontWeight: "600",
  fontFamily: "'Poppins', sans-serif",
  marginBottom: "8px"
}));

function index() {
  const router = useRouter();
  const [next, setNext] = useState(false);
  const [checked, setChecked] = useState(false);
  const sixWidth = useMediaQuery("(min-width:600px)");

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
            justifyContent: "center"
          }}
        >
          <ParentDiv>
            {next && (
              <Box
                sx={{
                  position: "relative",
                  paddingBottom: `${sixWidth ? 0 : 20}px`
                }}
              >
                <Box
                  onClick={() => {
                    setNext(false);
                  }}
                  sx={{
                    border: "2px solid rgba(0,0,0,0.12)",
                    position: `${sixWidth ? "absolute" : "none"}`,
                    left: "-60px",
                    top: "-40px",
                    height: "40px",
                    width: "40px",
                    borderRadius: "50%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    "&:hover": {
                      borderWidth: "2.5px"
                    }
                  }}
                >
                  <ArrowBackIosOutlinedIcon
                    sx={{
                      fontSize: "20px"
                    }}
                  />
                </Box>
              </Box>
            )}

            <Typography
              sx={{
                fontSize: "24px",
                fontFamily: "'Poppins', sans-serif",
                fontWeight: "800",
                marginBottom: "40px"
              }}
            >
              Sign up to Shortly
            </Typography>
            {!next && (
              <>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "black",
                    borderRadius: "50px",
                    padding: `${sixWidth ? "15px 100px" : "15px 20px"}`,
                    display: "flex",
                    gap: "15px",
                    fontSize: "14px",
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: "500",
                    textTransform: "none",
                    "&:hover": {
                      backgroundColor: "black"
                    }
                  }}
                >
                  <Image
                    src={Google}
                    alt="google icon"
                    height={20}
                    width={20}
                  />
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
                    margin: "30px 0"
                  }}
                >
                  <Divider sx={{ flexGrow: 1 }} />
                  <Typography
                    sx={{ padding: "0 10px", color: "rgba(0,0,0,0.32)" }}
                  >
                    or
                  </Typography>
                  <Divider sx={{ flexGrow: 1 }} />
                </Box>
                <Button
                  onClick={() => {
                    setNext(true);
                  }}
                  variant="outlined"
                  sx={{
                    color: "black",
                    border: "thin solid rgba(0,0,0,0.15)",
                    backgroundColor: "white",
                    borderRadius: "50px",
                    padding: `${sixWidth ? "15px 100px" : "15px 20px"}`,
                    display: "flex",
                    gap: "15px",
                    fontSize: "14px",
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: "500",
                    textTransform: "none",
                    marginBottom: "40px",
                    "&:hover": {
                      backgroundColor: "white",
                      border: "thin solid rgba(0,0,0,0.15)"
                    }
                  }}
                >
                  Continue with Email
                </Button>
                <Box>
                  <Typography
                    sx={{
                      fontSize: "12px",
                      marginTop: "20px",
                      fontFamily: "'Poppins', sans-serif",
                      textAlign: "center"
                    }}
                  >
                    By creating an account you agree with our{" "}
                    <span
                      style={{
                        textDecoration: "underline",
                        cursor: "pointer"
                      }}
                    >
                      Terms of Service,
                    </span>{" "}
                    <span
                      style={{
                        textDecoration: "underline",
                        cursor: "pointer"
                      }}
                    >
                      Privacy Policy,
                    </span>{" "}
                    and our default{" "}
                    <span
                      style={{
                        textDecoration: "underline",
                        cursor: "pointer"
                      }}
                    >
                      Notification Settings.
                    </span>
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      marginTop: "20px",
                      fontFamily: "'Poppins', sans-serif",
                      textAlign: "center"
                    }}
                  >
                    Already have an account?{" "}
                    <span
                      onClick={() => router.push("/login")}
                      style={{
                        textDecoration: "underline",
                        cursor: "pointer"
                      }}
                    >
                      Sign In
                    </span>
                  </Typography>
                </Box>
              </>
            )}
            {next && (
              <>
                <Box sx={{ display: "flex", gap: "10px" }}>
                  <Box>
                    <Text>Name</Text>
                    <TextField
                      id="outlined-size-small"
                      defaultValue="Small"
                      hiddenLabel
                      sx={{
                        height: "60px",
                        width: "100%"
                      }}
                      InputLabelProps={{
                        sx: {
                          color: "#003566",
                          textTransform: "capitalize"
                        }
                      }}
                      InputProps={{
                        sx: {
                          "& fieldset": {
                            borderWidth: "2px",
                            borderRadius: "12px",
                            borderColor: "#e7e7e9"
                          },
                          "&:focus-within fieldset, &:focus-visible fieldset": {
                            border: "2px solid #FE7D62!important"
                            // borderRadius: 0,
                          }
                        }
                      }}
                      inputProps={{
                        sx: {
                          color: "#FE7D62",
                          fontSize: "18px"
                        }
                      }}
                    />
                  </Box>
                  <Box>
                    <Text>Username</Text>
                    <TextField
                      id="outlined-size-small"
                      defaultValue="Small"
                      hiddenLabel
                      sx={{
                        height: "60px",
                        width: "100%"
                        // borderRadius: "0"
                      }}
                      InputLabelProps={{
                        sx: {
                          color: "#003566",
                          textTransform: "capitalize"
                        }
                      }}
                      InputProps={{
                        sx: {
                          "& fieldset": {
                            borderColor: "#e7e7e9",
                            borderWidth: "2px",
                            borderRadius: "12px"
                          },
                          "&:focus-within fieldset, &:focus-visible fieldset": {
                            border: "2px solid #FE7D62!important"
                            // borderRadius: 0,
                          }
                        }
                      }}
                      inputProps={{
                        sx: {
                          color: "#FE7D62",
                          fontSize: "18px"
                        }
                      }}
                    />
                  </Box>
                </Box>
                <Box sx={{ marginTop: "30px" }}>
                  <Text>Email</Text>
                  <TextField
                    id="outlined-size-small"
                    defaultValue="Small"
                    hiddenLabel
                    sx={{
                      height: "60px",
                      width: "100%"
                      // borderRadius: "0"
                    }}
                    InputLabelProps={{
                      sx: {
                        color: "#003566",
                        textTransform: "capitalize"
                      }
                    }}
                    InputProps={{
                      sx: {
                        "& fieldset": {
                          borderColor: "#e7e7e9",
                          borderWidth: "2px",
                          borderRadius: "12px"
                        },
                        "&:focus-within fieldset, &:focus-visible fieldset": {
                          border: "2px solid #FE7D62!important"
                          // borderRadius: 0,
                        }
                      }
                    }}
                    inputProps={{
                      sx: {
                        color: "#FE7D62",
                        fontSize: "18px"
                      }
                    }}
                  />
                </Box>
                <Box sx={{ marginTop: "30px" }}>
                  <Text>Password</Text>
                  <TextField
                    id="outlined-size-small"
                    defaultValue="Small"
                    hiddenLabel
                    sx={{
                      height: "60px",
                      width: "100%"
                      // borderRadius: "0"
                    }}
                    InputLabelProps={{
                      sx: {
                        color: "#003566",
                        textTransform: "capitalize"
                      }
                    }}
                    InputProps={{
                      sx: {
                        "& fieldset": {
                          borderColor: "#e7e7e9",
                          borderWidth: "2px",
                          borderRadius: "12px"
                        },
                        "&:focus-within fieldset, &:focus-visible fieldset": {
                          border: "2px solid #FE7D62!important"
                          // borderRadius: 0,
                        }
                      }
                    }}
                    inputProps={{
                      sx: {
                        color: "#FE7D62",
                        fontSize: "18px"
                      }
                    }}
                  />
                </Box>
                <Box
                  sx={{
                    padding: "12px 0",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                >
                  <Checkbox
                    disableRipple
                    checked={checked}
                    onChange={handleChange}
                    sx={{
                      "& .MuiSvgIcon-root": {
                        fontSize: 28,
                        borderRadius: "0"
                      },
                      borderRadius: "0",
                      padding: 0,
                      display: "flex",
                      paddingTop: "5px",
                      marginRight: "10px"
                    }}
                    inputProps={{ "aria-label": "controlled" }}
                  />
                  <Typography
                    sx={{
                      fontSize: "14px",
                      marginTop: "20px",
                      fontFamily: "'Poppins', sans-serif"
                    }}
                  >
                    I agree with Dribbble's{" "}
                    <span
                      style={{
                        textDecoration: "underline",
                        cursor: "pointer"
                      }}
                    >
                      Terms of Service,
                    </span>{" "}
                    <span
                      style={{
                        textDecoration: "underline",
                        cursor: "pointer"
                      }}
                    >
                      Privacy Policy
                    </span>
                    , and default{" "}
                    <span
                      style={{
                        textDecoration: "underline",
                        cursor: "pointer"
                      }}
                    >
                      Notification Settings.
                    </span>
                  </Typography>
                </Box>{" "}
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "black",
                    borderRadius: "50px",
                    padding: `${sixWidth ? "15px 100px" : "15px 20px"}`,
                    display: "flex",
                    gap: "15px",
                    fontSize: "14px",
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: "500",
                    textTransform: "none",
                    marginTop: "24px",
                    "&:hover": {
                      backgroundColor: "black"
                    }
                  }}
                >
                  Create Account
                </Button>
                <Typography
                  sx={{
                    fontSize: "14px",
                    marginTop: "20px",
                    fontFamily: "'Poppins', sans-serif",
                    textAlign: "center"
                  }}
                >
                  Already have an account?{" "}
                  <span
                    onClick={() => router.push("/login")}
                    style={{
                      textDecoration: "underline",
                      cursor: "pointer"
                    }}
                  >
                    Sign In
                  </span>
                </Typography>
              </>
            )}
          </ParentDiv>
        </Box>
      </InnerDiv>
    </OutterDiv>
  );
}

export default index;
