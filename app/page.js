import "../styles/global.css";
import { Box, ThemeProvider } from "@mui/material";
import Homepage from "@/components/Homepage";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import theme from "@/utils/theme";

function page() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            backgroundColor: "#FBF6F4"
          }}
        >
          <Header />
          <Homepage />
          <Footer />
        </Box>
      </ThemeProvider>
    </>
  );
}
export default page;
