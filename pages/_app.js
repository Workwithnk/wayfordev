import { Box } from "@mui/system";
import Head from "next/head";
import Navbar from "../Components/Navbar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>WayForDev</title>
        <link rel="icon" type="image/x-icon" href="/Logo.png" />
      </Head>
      <Navbar />
      <Box className="pageContainer">
        <Component {...pageProps} />
      </Box>
    </>
  );
}

export default MyApp;
