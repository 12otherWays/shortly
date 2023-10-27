import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import BoltIcon from "@mui/icons-material/Bolt";
import QrCode2Icon from "@mui/icons-material/QrCode2";
import LinkIcon from "@mui/icons-material/Link";
import TextField from "@mui/material/TextField";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Arrow from "../../../public/arrow.svg";
import Image from "next/image";
import FiberManualRecordSharpIcon from "@mui/icons-material/FiberManualRecordSharp";
import TextureSharpIcon from "@mui/icons-material/TextureSharp";
import Tooltip from "@mui/material/Tooltip";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

const OutterDiv = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
}));

const InnerDiv = styled(Box)(({ theme }) => ({
  padding: "80px",
  display: "flex",
  width: "85%",
  justifyContent: "space-between",
}));

function HeroSection() {
  return (
    <OutterDiv>
      <InnerDiv>
        <Box sx={{ height: "652px", position: "relative", width: "100%" }}>
          {/* h1 and h2 */}
          <Box
            sx={{
              top: "25%",
              left: "50%",
              display: "flex",
              flexDirection: "column",
              position: "absolute",
              transform: "translate(-50%, -50%)",
            }}
          >
            <Typography
              sx={{
                display: "inline-block",
                fontSize: "72px",
                textTransform: "capitalize",
                fontWeight: "900",
                fontFamily: "'Montserrat', sans-serif",
                lineHeight: "72px",
                textAlign: "center",
              }}
            >
              Shrink any URL
            </Typography>
            <Typography
              sx={{
                display: "inline-block",
                textAlign: "center",
                fontSize: "18px",
                textTransform: "capitalize",
                fontWeight: "500",
                fontFamily: "'Montserrat', sans-serif",
                lineHeight: "64px",
                // color: "#A1A1A1",
                color: "black",
              }}
            >
              Shrink. Share. Shine.
            </Typography>
          </Box>

          {/* other icon */}
          <QrCode2Icon
            sx={{
              position: "absolute",
              display: "inline-block",
              fontSize: "94px",
              top: "50%",
              left: "90%",
              color: "#FE7D62",
              transform: "translate(-50%, -50%) ",
            }}
          />
          <BoltIcon
            sx={{
              position: "absolute",
              display: "inline-block",
              fontSize: "64px",
              top: "10%",
              left: "80%",
              color: "#4265F0",
              transform: "translate(-50%, -50%) rotate(30deg)",
            }}
          />
          <BoltIcon
            sx={{
              position: "absolute",
              display: "inline-block",
              fontSize: "64px",
              top: "10%",
              left: "20%",
              color: "#FE7D62",
              transform: "translate(-50%, -50%) rotate(300deg)",
            }}
          />
          <Image
            src={Arrow}
            height={40}
            width={40}
            style={{
              position: "absolute",
              top: "49%",
              left: "26%",
            }}
          />
          <FiberManualRecordSharpIcon
            sx={{
              position: "absolute",
              display: "inline-block",
              fontSize: "14px",
              top: "70%",
              left: "20%",
              color: "#A1A1A1",
              transform: "translate(-50%, -50%) rotate(300deg)",
            }}
          />
          <TextureSharpIcon
            sx={{
              position: "absolute",
              display: "inline-block",
              fontSize: "54px",
              filter: "blur(2px)",
              top: "60%",
              left: "10%",
              color: "#4265F0",
              transform: "translate(-50%, -50%) rotate(300deg)",
            }}
          />

          {/* free text */}
          <Box
            sx={{
              position: "absolute",
              top: "47%",
              left: "23%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              transform: "translate(-50%, -50%) rotate(330deg)",
            }}
          >
            <Typography
              sx={{
                fontSize: "24px",
                color: "#A1A1A1",
                letterSpacing: "1px",
                fontFamily: "'Poppins', sans-serif",
              }}
            >
              it's
            </Typography>
            <Typography
              sx={{
                fontSize: "24px",
                color: "#A1A1A1",
                letterSpacing: "1px",
                fontFamily: "'Poppins', sans-serif",
              }}
            >
              free
            </Typography>
          </Box>
          {/* input and output */}
          <Box
            sx={{
              position: "absolute",
              top: "52%",
              // top: "58%",
              left: "50%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              transform: "translate(-50%, -50%)",
              width: "392px",
              gap: "10px",
            }}
          >
            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Button
                variant="contained"
                startIcon={
                  <LinkIcon
                    sx={{
                      transform: "rotate(45deg)",
                      color: "#e67057",
                    }}
                  />
                }
                sx={{
                  fontSize: "18px",
                  borderRadius: "32px",
                  height: "60px",
                  padding: "16px 0",
                  textTransform: "capitalize",
                  fontFamily: "'Poppins', sans-serif",
                  width: "48%",
                  letterSpacing: "1px",
                  borderColor: "#4265F0",
                  color: "white",
                  backgroundColor: "#4265F0",
                  "&:hover": {
                    color: "#FE7D62",
                    backgroundColor: "rgba(66, 101, 240, 0.4)",
                  },
                }}
              >
                Short link
              </Button>
              <Button
                variant="outlined"
                startIcon={
                  <QrCode2Icon
                    sx={{
                      color: "#FE7D62",
                    }}
                  />
                }
                sx={{
                  fontSize: "18px",
                  borderRadius: "32px",
                  height: "60px",
                  padding: "16px 0",
                  textTransform: "capitalize",
                  fontFamily: "'Poppins', sans-serif",
                  width: "48%",
                  letterSpacing: "1px",
                  textTransform: "capitalize",
                  borderColor: "#4265F0",
                  fontFamily: "'Poppins', sans-serif",
                  color: "white",
                  color: "#4265F0",
                  "&:hover": {
                    borderColor: "white",
                  },
                }}
              >
                QR code
              </Button>
            </Box>
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
                    // borderRadius: 0,
                  },
                  "&:focus-within fieldset, &:focus-visible fieldset": {
                    border: "1px solid #FE7D62!important",
                    // borderRadius: 0,
                  },
                },
                endAdornment: (
                  <InputAdornment
                    position="end"
                    sx={{
                      height: "30px",
                      width: "20px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      cursor: "pointer",
                      transition: "all 200ms ease-in-out",
                      "&:hover": {
                        transform: "scale(1.08)",
                      },
                    }}
                  >
                    <IconButton
                      type="button"
                      sx={{
                        p: "10px",
                        color: "#FE7D62",
                        fontSize: "14px",
                      }}
                      aria-label="search"
                    >
                      <ArrowForwardIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              inputProps={{
                sx: {
                  color: "#FE7D62",
                  fontSize: "18px",
                },
              }}
            />
            {/* out put link and qr code */}
            {/* <TextField
              id="outlined-size-small"
              hiddenLabel
              sx={{
                width: "100%",
                height: "60px",
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
                    // borderRadius: 0,
                  },
                  "&:focus-within fieldset, &:focus-visible fieldset": {
                    border: "1px solid #FE7D62!important",
                    // borderRadius: 0,
                  },
                },
                endAdornment: (
                  <InputAdornment
                    position="end"
                    sx={{
                      height: "30px",
                      width: "20px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      cursor: "pointer",
                      transition: "all 200ms ease-in-out",
                      "&:hover": {
                        transform: "scale(1.08)",
                      },
                    }}
                  >
                    <Tooltip title="Copy">
                      <IconButton
                        type="button"
                        sx={{
                          p: "10px",
                          color: "#FE7D62",
                          fontSize: "14px",
                        }}
                        aria-label="search"
                      >
                        <ContentCopyIcon />
                      </IconButton>
                    </Tooltip>
                  </InputAdornment>
                ),
              }}
              inputProps={{
                sx: {
                  color: "#FE7D62",
                  fontSize: "14px",
                },
              }}
            /> */}
          </Box>
          {/* <Box
            sx={{
              position: "absolute",
              top: "80%",
              left: "50%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              width: "220px",
              transform: "translate(-50%, -50%)",
              border: "1px solid #FBF6F4",
              aspectRatio: 1,
            }}
          ></Box> */}
        </Box>
      </InnerDiv>
    </OutterDiv>
  );
}

export default HeroSection;
