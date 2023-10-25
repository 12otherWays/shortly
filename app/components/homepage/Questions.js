import * as React from "react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

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

function Questions() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <OutterDiv>
      <InnerDiv>
        <Box sx={{ width: "40%" }}>
          <Typography
            sx={{
              fontSize: "64px",
              textTransform: "capitalize",
              fontWeight: "900",
              fontFamily: "'Montserrat', sans-serif",
              lineHeight: "64px",
              marginBottom: "24px",
            }}
          >
            frequently asked question
          </Typography>
          <Typography
            sx={{
              fontSize: "18px",
              textTransform: "capitalize",
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 300,
              letterSpacing: "0.8px",
            }}
          >
            Everything you need to know about our Charge email outreach tool and
            billing.
          </Typography>
        </Box>
        <Box sx={{ width: "58%" }}>
          <Accordion
            sx={{
              backgroundColor: "transparent",
              border: "none",
              boxShadow: "none",
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
                borderBottom: "1px solid #EBEBEB",
              }}
            >
              <Typography
                sx={{
                  width: "90%",
                  flexShrink: 0,
                  fontSize: "18px",
                  fontWeight: "500",
                  fontFamily: "'Poppins', sans-serif",
                  lineHeight: "25px",
                }}
              >
                Can I change my plan later?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                sx={{
                  fontSize: "16px",
                  fontFamily: "'Poppins', sans-serif",
                  lineHeight: "25px",
                  fontWeight: 300,
                  letterSpacing: "0.8px",
                }}
              >
                You can change your subscription plan at any time through the
                Charge Stripe portal, accessible through the Charge extension
                menu.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            sx={{
              backgroundColor: "transparent",
              border: "none",
              boxShadow: "none",
              "&::before": {
                height: "0px",
              },
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
                borderBottom: "1px solid #EBEBEB",
              }}
            >
              <Typography
                sx={{
                  width: "90%",
                  flexShrink: 0,
                  fontSize: "18px",
                  fontWeight: "500",
                  fontFamily: "'Poppins', sans-serif",
                  lineHeight: "25px",
                }}
              >
                What is your cancellation policy?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                sx={{
                  fontSize: "16px",
                  fontFamily: "'Poppins', sans-serif",
                  lineHeight: "25px",
                  fontWeight: 300,
                  letterSpacing: "0.8px",
                }}
              >
                You may cancel your Subscription renewal either through your
                account settings and Stripe portal or by contacting us. You will
                not receive a refund for the fees you already paid for your
                current subscription period and you will be able to access the
                service until the end of your current subscription period.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            sx={{
              backgroundColor: "transparent",
              border: "none",
              boxShadow: "none",
              "&::before": {
                height: "0px",
              },
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
                borderBottom: "1px solid #EBEBEB",
              }}
            >
              <Typography
                sx={{
                  width: "90%",
                  flexShrink: 0,
                  fontSize: "18px",
                  fontWeight: "500",
                  fontFamily: "'Poppins', sans-serif",
                  lineHeight: "25px",
                }}
              >
                General settings
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                sx={{
                  fontSize: "16px",
                  fontFamily: "'Poppins', sans-serif",
                  lineHeight: "25px",
                  fontWeight: 300,
                  letterSpacing: "0.8px",
                }}
              >
                Nulla facilisi. Phasellus sollicitudin nulla et quam mattis
                feugiat. Aliquam eget maximus est, id dignissim quam.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            sx={{
              backgroundColor: "transparent",
              border: "none",
              boxShadow: "none",
              "&::before": {
                height: "0px",
              },
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
                borderBottom: "1px solid #EBEBEB",
              }}
            >
              <Typography
                sx={{
                  width: "90%",
                  flexShrink: 0,
                  fontSize: "18px",
                  fontWeight: "500",
                  fontFamily: "'Poppins', sans-serif",
                  lineHeight: "25px",
                }}
              >
                Can other info be added to an invoice?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                sx={{
                  fontSize: "16px",
                  fontFamily: "'Poppins', sans-serif",
                  lineHeight: "25px",
                  fontWeight: 300,
                  letterSpacing: "0.8px",
                }}
              >
                At the moment, you need to contact our support team for a custom
                invoice for our email outreach solution for Outlook & Exchange.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            sx={{
              backgroundColor: "transparent",
              border: "none",
              boxShadow: "none",
              "&::before": {
                height: "0px",
              },
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
                borderBottom: "1px solid #EBEBEB",
              }}
            >
              <Typography
                sx={{
                  width: "90%",
                  flexShrink: 0,
                  fontSize: "18px",
                  fontWeight: "500",
                  fontFamily: "'Poppins', sans-serif",
                  lineHeight: "25px",
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
                  letterSpacing: "0.8px",
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
                  letterSpacing: "0.8px",
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
        </Box>
      </InnerDiv>
    </OutterDiv>
  );
}

export default Questions;
