"use client";
import * as React from "react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

const OutterDiv = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center"
}));

const InnerDiv = styled(Box)(({ theme }) => ({
  padding: "80px",
  display: "flex",
  width: "85%",
  justifyContent: "space-between",
  [theme.breakpoints.down("md")]: {
    padding: "80px 40px",
    flexDirection: "column",
    width: "100%"
  },
  [theme.breakpoints.down("sm")]: {
    padding: "80px 10px",
    width: "100%"
  },
  [theme.breakpoints.up("lg")]: {
    width: "1200px"
  }
}));

const LeftDiv = styled(Box)(({ theme }) => ({
  width: "40%",
  [theme.breakpoints.down("md")]: {
    width: "100%"
  }
}));
const RightDiv = styled(Box)(({ theme }) => ({
  width: "58%",
  [theme.breakpoints.down("md")]: {
    marginTop: "60px",
    width: "100%"
  }
}));
const MainText = styled(Typography)(({ theme }) => ({
  fontSize: "64px",
  textTransform: "capitalize",
  fontWeight: "900",
  fontFamily: "'Montserrat', sans-serif",
  lineHeight: "64px",
  marginBottom: "24px",
  [theme.breakpoints.down("lg")]: {
    fontSize: "48px",
    lineHeight: "48px"
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "36px",
    lineHeight: "36px"
  }
}));

function Questions() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <OutterDiv>
      <InnerDiv>
        <LeftDiv>
          <MainText>frequently asked question</MainText>
          <Typography
            sx={{
              fontSize: "18px",
              textTransform: "capitalize",
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 300,
              letterSpacing: "0.8px"
            }}
          >
            Everything you need to know about our Charge email outreach tool and
            billing.
          </Typography>
        </LeftDiv>
        <RightDiv>
          <Accordion
            sx={{
              backgroundColor: "transparent",
              border: "none",
              boxShadow: "none"
            }}
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <AccordionSummary
              expandIcon={<AddCircleOutlineIcon sx={{ color: "#FE7D62" }} />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
              sx={{
                height: "88px",
                borderBottom: "1px solid #EBEBEB"
              }}
            >
              <Typography
                sx={{
                  width: "90%",
                  flexShrink: 0,
                  fontSize: "18px",
                  fontWeight: "500",
                  fontFamily: "'Poppins', sans-serif",
                  lineHeight: "25px"
                }}
              >
                What is a URL shortener?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                sx={{
                  fontSize: "16px",
                  fontFamily: "'Poppins', sans-serif",
                  lineHeight: "25px",
                  fontWeight: 300,
                  letterSpacing: "0.8px"
                }}
              >
                A URL shortener, or a link shortener, simplifies long and
                complicated URLs into brief, comprehensible links.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            sx={{
              backgroundColor: "transparent",
              border: "none",
              boxShadow: "none",
              "&::before": {
                height: "0px"
              }
            }}
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
          >
            <AccordionSummary
              expandIcon={<AddCircleOutlineIcon sx={{ color: "#FE7D62" }} />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
              sx={{
                height: "88px",
                borderBottom: "1px solid #EBEBEB"
              }}
            >
              <Typography
                sx={{
                  width: "90%",
                  flexShrink: 0,
                  fontSize: "18px",
                  fontWeight: "500",
                  fontFamily: "'Poppins', sans-serif",
                  lineHeight: "25px"
                }}
              >
                How do I change a long URL to a short URL?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                sx={{
                  fontSize: "16px",
                  fontFamily: "'Poppins', sans-serif",
                  lineHeight: "25px",
                  fontWeight: 300,
                  letterSpacing: "0.8px"
                }}
              >
                To shorten a URL, you'll need a service like RB.GY. First, copy
                the long URL you want to shorten. Then, access the URL shortener
                tool. Paste your long URL into the appropriate field, then click
                "Shorten URL." RB.GY will instantly generate a shortened version
                of your original URL, which leads to the same page when clicked.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            sx={{
              backgroundColor: "transparent",
              border: "none",
              boxShadow: "none",
              "&::before": {
                height: "0px"
              }
            }}
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
          >
            <AccordionSummary
              expandIcon={<AddCircleOutlineIcon sx={{ color: "#FE7D62" }} />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
              sx={{
                height: "88px",
                borderBottom: "1px solid #EBEBEB"
              }}
            >
              <Typography
                sx={{
                  width: "90%",
                  flexShrink: 0,
                  fontSize: "18px",
                  fontWeight: "500",
                  fontFamily: "'Poppins', sans-serif",
                  lineHeight: "25px"
                }}
              >
                What are the benefits of a short URL?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                sx={{
                  fontSize: "16px",
                  fontFamily: "'Poppins', sans-serif",
                  lineHeight: "25px",
                  fontWeight: 300,
                  letterSpacing: "0.8px"
                }}
              >
                When you choose to shorten a URL, you're optimizing your digital
                content in several ways. Short URLs are more manageable and
                tidy, fitting neatly into character-limited spaces like tweets
                or Instagram bios. They are also simpler to remember and type
                manually. Moreover, many URL shorteners include tracking
                capabilities, offering vital data on link engagement – a crucial
                tool for businesses and marketing campaigns. Finally, short URLs
                can be customized for increased brand recognition and user
                trust.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            sx={{
              backgroundColor: "transparent",
              border: "none",
              boxShadow: "none",
              "&::before": {
                height: "0px"
              }
            }}
            expanded={expanded === "panel4"}
            onChange={handleChange("panel4")}
          >
            <AccordionSummary
              expandIcon={<AddCircleOutlineIcon sx={{ color: "#FE7D62" }} />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
              sx={{
                height: "88px",
                borderBottom: "1px solid #EBEBEB"
              }}
            >
              <Typography
                sx={{
                  width: "90%",
                  flexShrink: 0,
                  fontSize: "18px",
                  fontWeight: "500",
                  fontFamily: "'Poppins', sans-serif",
                  lineHeight: "25px"
                }}
              >
                Can I use a domain I already own?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                sx={{
                  fontSize: "16px",
                  fontFamily: "'Poppins', sans-serif",
                  lineHeight: "25px",
                  fontWeight: 300,
                  letterSpacing: "0.8px"
                }}
              >
                Absolutely! Personalization, flexibility, and control are what
                Shortly is all about. With each of our paid plans, you can
                register or connect at least one top-level domain
                (your-domain.com) or subdomains (sub.your-domain.com) that you
                already own to create your branded short links using Shortly.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            sx={{
              backgroundColor: "transparent",
              border: "none",
              boxShadow: "none",
              "&::before": {
                height: "0px"
              }
            }}
            expanded={expanded === "panel5"}
            onChange={handleChange("panel5")}
          >
            <AccordionSummary
              expandIcon={<AddCircleOutlineIcon sx={{ color: "#FE7D62" }} />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
              sx={{
                height: "88px",
                borderBottom: "1px solid #EBEBEB"
              }}
            >
              <Typography
                sx={{
                  width: "90%",
                  flexShrink: 0,
                  fontSize: "18px",
                  fontWeight: "500",
                  fontFamily: "'Poppins', sans-serif",
                  lineHeight: "25px"
                }}
              >
                How does billing work?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                sx={{
                  fontSize: "16px",
                  fontFamily: "'Poppins', sans-serif",
                  lineHeight: "25px",
                  fontWeight: 300,
                  letterSpacing: "0.8px"
                }}
              >
                You shall provide the company with accurate and complete billing
                information including full name, address, state, zip code,
                telephone number, and a valid payment method information.
              </Typography>
              <Typography
                sx={{
                  fontSize: "16px",
                  fontFamily: "'Poppins', sans-serif",
                  lineHeight: "25px",
                  fontWeight: 300,
                  letterSpacing: "0.8px"
                }}
              >
                Should automatic billing fail to occur for any reason, the
                company will issue an electronic invoice indicating that you
                must proceed manually, within a certain deadline date, with the
                full payment corresponding to the billing period as indicated on
                the invoice.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </RightDiv>
      </InnerDiv>
    </OutterDiv>
  );
}

export default Questions;
