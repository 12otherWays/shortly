import "../styles/globals.css";
import { Box, ThemeProvider, createTheme } from "@mui/material";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      xs500: 500,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            backgroundColor: "#ecede8",
          }}
        >
          {/* <Header /> */}
          <Component {...pageProps} />
          {/* <Footer /> */}
        </Box>
      </ThemeProvider>
    </>
  );
}
export default MyApp;
