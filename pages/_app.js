import "../styles/globals.css";
import { IconContext } from "react-icons";

function MyApp({ Component, pageProps }) {
  return (
    <IconContext.Provider
      value={{
        color: "rgba(0,0,0,.3)",
        size: "1.4rem",
      }}
    >
      <Component {...pageProps} />
    </IconContext.Provider>
  );
}

export default MyApp;
