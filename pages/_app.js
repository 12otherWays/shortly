import Footer from "@/app/components/Footer";
import "../styles/global.css";
import { Box, ThemeProvider, createTheme } from "@mui/material";
import Header from "@/app/components/Header";
import { useRouter } from "next/router";
import { myTheme } from "@/utils/Theme";

const theme = createTheme(myTheme);

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <>
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            backgroundColor: "#FBF6F4",
          }}
        >
          {router.pathname !== "/signup" && router.pathname !== "/login" && (
            <Header />
          )}
          <Component {...pageProps} />
          {router.pathname !== "/signup" && router.pathname !== "/login" && (
            <Footer />
          )}
        </Box>
      </ThemeProvider>
    </>
  );
}
export default MyApp;
