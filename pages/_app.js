import '../styles/globals.css';
import "../styles/fonts.css";
import Head from 'next/head';
// Redux:
import { Provider, useSelector } from "react-redux";
import { useEffect } from 'react';
import { configureStore } from "@reduxjs/toolkit";
import settings from "../reducers/settings";
const store = configureStore({
  reducer: { settings }, 
});

// The theme component must be inside the <Provider>
function ThemeWrapper({ children }) {
  const theme = useSelector((state) => state.settings.value.theme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return children;
}

function App({ Component, pageProps }) {

  return (
    <Provider store={store}>
      <Head>
        <title>Next.js App</title>
      </Head>
      <ThemeWrapper>
        <Component {...pageProps} />
      </ThemeWrapper>
    </Provider>
  );
}

export default App;
