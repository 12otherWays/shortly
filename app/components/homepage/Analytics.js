import { Box, Typography, styled } from "@mui/material";
import PhoneCard from "../analytics_card/PhoneCard";
import GraphCard from "../analytics_card/GraphCard";
import MapCard from "../analytics_card/MapCard";

const OutterDiv = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
}));
const InnerDiv = styled(Box)(({ theme }) => ({
  padding: "80px",
  display: "flex",
  width: "85%",
  flexDirection: "column",
  justifyContent: "center",
}));

function Analytics() {
  return (
    <OutterDiv>
      <InnerDiv>
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
          analytics
        </Typography>
        <Box
          sx={{
            display: "flex",
            gap: "20px",
            padding: "10px 0",
            alignItems: "flex-start",
          }}
        >
          <PhoneCard />
          <GraphCard />
          <MapCard />
        </Box>
      </InnerDiv>
    </OutterDiv>
  );
}

export default Analytics;
