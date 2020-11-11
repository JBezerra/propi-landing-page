import { useEffect } from "react";
import { useRouter } from "next/router";
import * as gtag from "../utils/gtag";
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const { pathname } = useRouter();
  gtag.pageview(pathname);

  return <Component {...pageProps} />
}

export default MyApp
