import 'tailwindcss/tailwind.css';
import { Provider } from 'react-redux'
import { store } from '../app/store'
import '../styles/globals.css'
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
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    );
  }
}
export default MyApp
