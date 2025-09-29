import "styles/globals.css";
import "styles/fonts.css";
import Head from "next/head";
import { Provider, useSelector } from "react-redux";
import { useEffect } from "react";
import { configureStore } from "@reduxjs/toolkit";
import settings from "reducers/settings";
import navigation from "reducers/navigation";

const store = configureStore({
  reducer: { settings, navigation },
});

// The theme component must be inside the <Provider>, therefore this part is isolated in a function
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
        <title>llpsi</title>
      </Head>
      <ThemeWrapper>
        <Component {...pageProps} />
      </ThemeWrapper>
    </Provider>
  );
}

export default App;
