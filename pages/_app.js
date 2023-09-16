import "../styles/globals.css";
import { Provider } from "react-redux";
import { store } from "../atom/store";
import { SessionProvider } from "next-auth/react";
import { useState, useEffect } from 'react'

const MyApp = ({ Component, pageProps }) => {
  const [showChild, setShowChild] = useState(false);
  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    return null;
  }

  if (typeof window === 'undefined') {
    return <></>;
  } else {
    return (
      <SessionProvider session={pageProps.session}>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </SessionProvider>
    );
  }
}
export default MyApp
