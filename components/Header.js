"use client";
import { Box, Button, Drawer, Typography } from "@mui/material";
import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import { useRouter } from "next/navigation";
import useMediaQuery from "@mui/material/useMediaQuery";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const OutterDiv = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  borderBottom: "1px solid #EBEBEB",
  position: "fixed",
  top: "0",
  width: "100%",
  backdropFilter: "blur(12px)",
  backgroundColor: "rgba(249, 250, 251, 0.3)",
  zIndex: 1000
}));
const InnerDiv = styled(Box)(({ theme }) => ({
  display: "flex",
  width: "85%",
  justifyContent: "space-between",
  padding: "10px 80px",
  alignItems: "center",
  [theme.breakpoints.down("md")]: {
    padding: "10px 40px",
    width: "95%"
  },
  [theme.breakpoints.up("lg")]: {
    width: "1200px"
  }
}));
const ParentDiv = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  gap: "10px",
  [theme.breakpoints.up("md")]: {
    gap: "15px"
  },
  [theme.breakpoints.up("lg")]: {
    gap: "30px"
  }
}));
const LinkDiv = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  gap: "10px",
  [theme.breakpoints.up("md")]: {
    gap: "15px"
  },
  [theme.breakpoints.up("lg")]: {
    gap: "30px"
  }
}));
const ButtonDiv = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  gap: "10px",
  [theme.breakpoints.up("md")]: {
    gap: "15px"
  },
  [theme.breakpoints.up("lg")]: {
    gap: "30px"
  }
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
    color: "black"
  }
}));
const MainText = styled(Typography)(({ theme }) => ({
  display: "inline-block",
  fontSize: "24px",
  textTransform: "capitalize",
  fontWeight: "900",
  fontFamily: "'Montserrat', sans-serif",
  lineHeight: "24px",
  textAlign: "center",
  [theme.breakpoints.down("lg")]: {
    fontSize: "20px",
    lineHeight: "20px"
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "16px",
    lineHeight: "16px"
  }
}));

function Header() {
  const router = useRouter();
  const matches = useMediaQuery("(min-width:800px)");
  const [openDrawer, setOpenDrawer] = useState(false);
  const [clicked, setClicked] = useState(false);
  return (
    <OutterDiv>
      <InnerDiv>
        <Box>
          <MainText>Shortly</MainText>
        </Box>
        {!matches &&
          (!clicked ? (
            <MenuIcon
              onClick={() => {
                setOpenDrawer(true);
                setClicked(true);
              }}
            />
          ) : (
            <CloseIcon
              onClick={() => {
                setOpenDrawer(false);
                setClicked(false);
              }}
            />
          ))}
        {matches ? (
          <ParentDiv>
            <LinkDiv>
              <a href="/coming-soon" style={{ textDecoration: "none" }}>
                <Text>docs</Text>
              </a>
              <a href="/coming-soon" style={{ textDecoration: "none" }}>
                <Text>pricing</Text>
              </a>
              <a href="/coming-soon" style={{ textDecoration: "none" }}>
                <Text>guide</Text>{" "}
              </a>
            </LinkDiv>
            <ButtonDiv>
              <Button
                onClick={() => router.push("/login")}
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
                    backgroundColor: "rgba(230, 112, 87, 0.1)"
                  }
                }}
              >
                log in
              </Button>
              <Button
                onClick={() => router.push("/signup")}
                variant="contained"
                sx={{
                  height: "30px",
                  letterSpacing: "1px",
                  fontSize: "14px",
                  fontFamily: "'Poppins', sans-serif",
                  textTransform: "capitalize",
                  backgroundColor: "#FE7D62",
                  "&:hover": {
                    backgroundColor: "#e67057"
                  }
                }}
              >
                start up
              </Button>
            </ButtonDiv>
          </ParentDiv>
        ) : (
          <Drawer
            sx={{ zIndex: 999 }}
            anchor={"top"}
            open={openDrawer}
            onClose={() => {
              setOpenDrawer(false);
            }}
          >
            <Box
              sx={{
                padding: "80px 40px 40px 40px",
                display: "flex",
                flexDirection: "column",
                textAlign: "start",
                gap: "30px"
              }}
            >
              <Text
                sx={{
                  fontSize: "20px",
                  display: "flex",
                  height: "40px",
                  alignItems: "center"
                }}
              >
                docs
              </Text>
              <Text
                sx={{
                  fontSize: "20px",
                  display: "flex",
                  alignItems: "center",
                  height: "40px"
                }}
              >
                pricing
              </Text>
              <Text
                sx={{
                  fontSize: "20px",
                  display: "flex",
                  alignItems: "center",
                  height: "40px"
                }}
              >
                guide
              </Text>
              <Button
                onClick={() => router.push("/login")}
                variant="outlined"
                sx={{
                  height: "60px",
                  fontSize: "20px",
                  letterSpacing: "1px",
                  textTransform: "capitalize",
                  borderColor: "#FE7D62",
                  fontFamily: "'Poppins', sans-serif",
                  color: "#FE7D62",
                  "&:hover": {
                    borderColor: "#e67057",
                    backgroundColor: "rgba(230, 112, 87, 0.1)"
                  }
                }}
              >
                log in
              </Button>
              <Button
                onClick={() => router.push("/signup")}
                variant="contained"
                sx={{
                  height: "60px",
                  letterSpacing: "1px",
                  fontSize: "20px",
                  fontFamily: "'Poppins', sans-serif",
                  textTransform: "capitalize",
                  backgroundColor: "#FE7D62",
                  "&:hover": {
                    backgroundColor: "#e67057"
                  }
                }}
              >
                start up
              </Button>
            </Box>
          </Drawer>
        )}
      </InnerDiv>
    </OutterDiv>
  );
}

export default Header;
