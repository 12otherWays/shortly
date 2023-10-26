import { Box } from "@mui/material";
import Questions from "./homepage/Questions";
import HeroSection from "./homepage/HeroSection";
import SignUpSection from "./homepage/SignUpSection";

function Homepage() {
  return (
    <Box>
      <HeroSection />
      <SignUpSection />
      <Questions />
    </Box>
  );
}

export default Homepage;
