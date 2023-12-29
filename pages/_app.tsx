import HEAD from 'next/head'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { UserProvider } from '@/context/UserContext'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <HEAD>
        <title>ZeroWaste-Quest</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </HEAD>
      <UserProvider>
      <Component {...pageProps} />
      </UserProvider>
    </>
  )
}
