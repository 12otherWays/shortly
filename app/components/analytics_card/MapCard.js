import { Box, Divider, Typography, styled } from "@mui/material";
import worldMap from "../../../public/wrld-18.svg";
import Image from "next/image";
import { motion } from "framer-motion";

const mobileVariant = {
  rest: {
    backgroundPosition: "-40% 90%,30% 0%",
  },
  move: {
    backgroundPosition: "-38% 89%,30% -2%",
  },
};
const mobileTextMotion = {
  move: {
    x: 4,
  },
};

const Card = styled(motion.div)(({ theme }) => ({
  borderRadius: "20px",
  padding: "28px 32px 24px 32px",
  backgroundColor: "white",
}));

const Text = styled(motion.p)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "16px",
  fontWeight: 600,
  textTransform: "capitalize",
  fontFamily: "'Poppins', sans-serif",
  width: "70%",
}));
const PercentageText = styled(Typography)(({ theme }) => ({
  width: "30%",
}));
const TextDiv = styled(Box)(({ theme }) => ({
  display: "flex",
}));

const data = [
  { country: "united state", perc: "24", user: "24000" },
  { country: "Japan", perc: "20", user: "20000" },
  { country: "germany", perc: "17", user: "17000" },
  { country: "india", perc: "13", user: "13000" },
  { country: "australia", perc: "9", user: "9000" },
];

function MapCard() {
  return (
    <Card
      sx={{
        display: "flex",
      }}
    >
      <Box>
        <TextDiv>
          <Text>World Map</Text>
          <Text>see details</Text>
        </TextDiv>
        <Image src={worldMap} width={20} height={40} alt={"world map"} />
      </Box>
      <Box sx={{ borderLeft: "thin solid #E0E0E0" }}>
        <TextDiv>
          <Text>engagment by location</Text>
          <Typography>view report</Typography>
        </TextDiv>
        {data.map((item, i) => {
          return (
            <TextDiv key={i}>
              <Text>{item.country}</Text>
              <PercentageText>
                {item.perc}% ({item.user})
              </PercentageText>
            </TextDiv>
          );
        })}
        <Divider />
        <Text sx={{ width: "100%" }}>
          the top 5 countries can make up for 77% of your total engagment.
        </Text>
      </Box>
    </Card>
  );
}

export default MapCard;
