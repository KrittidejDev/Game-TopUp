import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "../store";
import { GlobalStyle } from "@/styles/GlobalStyle";
import { appWithTranslation } from "next-i18next";
import theme from "@/styles/theme.json";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { Modals } from "@/components";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <div className={poppins.className}>
            <GlobalStyle />
            <Component {...pageProps} />
            <ToastContainer />
            {/* <Modals.Alert /> */}
          </div>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}

export default appWithTranslation(App);
