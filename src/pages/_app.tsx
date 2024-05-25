import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { PasswordProvider } from '@/contexts/PasswordContext'

export default function App({ Component, pageProps }: AppProps) {
  return <PasswordProvider><Component {...pageProps} /></PasswordProvider>
}
