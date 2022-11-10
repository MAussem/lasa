import "../styles/globals.css";
import type { AppProps } from "next/app";
import { NextUIProvider, createTheme } from "@nextui-org/react";
// import { useState } from "react";
// import Router from "next/router";
// import Loader from "../components/loader";

const lightTheme = createTheme({ type: "light" });

export default function App({ Component, pageProps }: AppProps) {
  // const [loading, setLoading] = useState(false);
  // Router.events.on("routeChangeStart", (url) => {
  //   setLoading(true);
  // });
  // Router.events.on("routeChangeComplete", (url) => {
  //   setLoading(false);
  // });
  return (
    // any comp can have access to nextui themes ex. darkTheme
    <NextUIProvider theme={lightTheme}>
      {/* {loading && <Loader />} */}
      <Component {...pageProps} />
    </NextUIProvider>
  );
}
