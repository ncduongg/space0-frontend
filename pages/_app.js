import Notiflix from "notiflix";
import { useEffect } from "react";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    Notiflix.Loading.hourglass("Loading...", {
      backgroundColor: "rgba(0,0,0,0.1)",
    });
    return Notiflix.Loading.remove(2000)
  });
  return <Component {...pageProps} />
}

export default MyApp;
