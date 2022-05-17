import type { AppProps } from 'next/app';

import { GlobalStyle } from '../styles/global';

import { UserProvider } from '../context/userContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <UserProvider>
        <Component {...pageProps} />
      </UserProvider>

      <GlobalStyle />
    </>
  );
}

export default MyApp;
