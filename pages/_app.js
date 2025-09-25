import '../styles/globals.css';
import "../styles/fonts.css";
import Head from 'next/head';
// Redux:
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import language from "../reducers/language";
const store = configureStore({
  reducer: { language }, 
});


function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Head>
        <title>Next.js App</title>
      </Head>
      <Component {...pageProps} />
    </Provider>
  );
}

export default App;
