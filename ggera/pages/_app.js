'use client'
import Head from 'next/head'
import RootLayout from '../app/layout'
import '../styles/globals.css';
import { ThemeProvider } from 'styled-components'
import themes from '../styles/themes';




//this is the root component of our app
function App({ Component, pageProps }) {
  return (
			<div>
				<Head lang='eng'>
					<title>Home</title>
					<meta name='description' content='Home page' />
					<link rel='icon' href='/favicon.ico' />
				</Head>
				<ThemeProvider theme={themes[0]}>
					<RootLayout>
							<Component {...pageProps} />
					</RootLayout>
				</ThemeProvider>
			</div>
  )
}
export default App