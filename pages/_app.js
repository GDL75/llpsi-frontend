import "../styles/globals.css";
import "../styles/fonts.css";
import Head from "next/head";
import { Provider, useSelector } from "react-redux";
import { useEffect } from "react";
import { configureStore } from "@reduxjs/toolkit";
import settings from "../reducers/settings";

const store = configureStore({
  reducer: { settings },
});

// The theme component must be inside the <Provider>
function ThemeWrapper({ children }) {
  const book = useSelector((state) => state.settings.value.book);
  const theme = useSelector((state) => state.settings.value.theme);
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", `${book}-${theme}`);
  }, [book, theme]);

  return children;
}

function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Head>
        <title>llpsi Part 1</title>
      </Head>
      <ThemeWrapper>
        <Component {...pageProps} />
      </ThemeWrapper>
    </Provider>
  );
}

export default App;
