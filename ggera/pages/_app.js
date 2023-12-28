import Head from 'next/head'
import RootLayout from '../app/layout'
import NoSSR from 'react-no-ssr';
import '../styles/globals.css';


//this is the root component of our app
function App({ Component, pageProps }) {
  return (
		<NoSSR>

		<div>
			<Head lang='eng'>
				<title>Home</title>
				<meta name='description' content='Home page' />
				<link rel='stylesheet' href='https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
      {/* <ThemeProvider> */}
				<RootLayout>
						<Component {...pageProps} />
				</RootLayout>
      {/* </ThemeProvider> */}
    </div>
		</NoSSR>
  )
}
export default App