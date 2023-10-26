import { Box } from "@mui/material";
import Questions from "./homepage/Questions";
import HeroSection from "./homepage/HeroSection";

function Homepage() {
  return (
    <Box>
      <HeroSection />
      <Questions />
    </Box>
  );
}

export default Homepage;
