import HEAD from "next/head";
import "@/styles/globals.css";
import { AppProps } from 'next/app';
import { UserProvider } from '@/context/UserContext';
import { AuthProvider } from '@/context/AuthContext';
import { auth } from '@/config/firebase';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <HEAD>
        <title>ZeroWaste-Quest</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </HEAD>
      <AuthProvider auth={auth}>
        <UserProvider> {/* Ensure UserProvider is wrapping Component */}
          <Component {...pageProps} />
        </UserProvider>
      </AuthProvider>
    </>
  );
}

export default MyApp;
