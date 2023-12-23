import Head from 'next/head'
import { ThemeProvider } from '../context/themeContext'
import RootLayout from '../app/layout'

//this is the root component of our app
function App({ Component, pageProps }) {
  return (
		<div>
			<Head lang='eng'>
				<title>Home</title>
				<meta name='description' content='Home page' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
      <ThemeProvider>
				<RootLayout>
						<Component {...pageProps} />
				</RootLayout>
      </ThemeProvider>
    </div>
  )
}
export default App