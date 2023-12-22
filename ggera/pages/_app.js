import Head from 'next/head'
import { ThemeProvider } from '../context/themeContext'

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
  			<Component {...pageProps} />
      </ThemeProvider>
    </div>
  )
}
export default App