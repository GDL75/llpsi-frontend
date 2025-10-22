import "styles/globals.css";
import "styles/fonts.css";
import Head from "next/head";
import { Provider, useSelector } from "react-redux";
import { useEffect } from "react";
import { configureStore } from "@reduxjs/toolkit";
import settings from "reducers/settings";
import navigation from "reducers/navigation";
import morphology from "reducers/morphology";
import exercises from "reducers/exercises";
import morphologyConfig from "data/morphologyConfig";
import { AudioProvider } from "context/AudioContext";

const store = configureStore({
  reducer: { settings, navigation, morphology, exercises },
});

// The theme component must be inside the <Provider>, therefore this part is isolated in a function
function ThemeWrapper({ children }) {
  const book = useSelector((state) => state.navigation.value.book);
  const theme = useSelector((state) => state.settings.value.theme);
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", `${book}-${theme}`);
  }, [book, theme]);

  return children;
}

// Same here, the body styles mus be inside the <Provider>
function BodyClasses({ children }) {
  const morphState = useSelector((state) => state.morphology);

  useEffect(() => {
    morphologyConfig.forEach((morph) => {
      if (morphState[morph.key]) {
        document.body.classList.add(morph.styleClass);
      } else {
        document.body.classList.remove(morph.styleClass);
      }
    });
  }, [morphState]);

  return children;
}

function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <AudioProvider>
        <Head>
          <title>llpsi</title>
        </Head>
        <ThemeWrapper>
          <BodyClasses>
            <Component {...pageProps} />
          </BodyClasses>
        </ThemeWrapper>
      </AudioProvider>
    </Provider>
  );
}

export default App;
