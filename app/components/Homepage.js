import { Box } from "@mui/material";
import Questions from "./homepage/Questions";
import HeroSection from "./homepage/HeroSection";
import SignUpSection from "./homepage/SignUpSection";
import Analytics from "./homepage/Analytics";

function Homepage() {
  return (
    <Box>
      <HeroSection />
      <SignUpSection />
      <Analytics />
      <Questions />
    </Box>
  );
}

export default Homepage;
