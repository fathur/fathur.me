import type { AppProps } from 'next/app';
import 'tailwindcss/tailwind.css';
import '../styles/globals.css';
import { Auth0Provider } from '@auth0/auth0-react';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Auth0Provider
      domain="auction.au.auth0.com"
      clientId="XiT1i0ZStnLudv88imcqsZnwEgb7cabM"
      redirectUri="http://localhost:3000/auth-callback"
    >
      <Component {...pageProps} />;
    </Auth0Provider>
  );
}
export default MyApp;
