import { createContext, useContext, useState } from 'react'
import  themes  from '../styles/themes'

const ThemeContext = createContext()
// wrap the entire app in a ThemeProvider bcos here is checking a children prop, so the children is going to be our app
export const ThemeProvider = ({children}) => {
	const [theme, setTheme] = useState(0)
	const currentTheme = themes[theme]
	console.log(themes[theme])

  return (
    <ThemeContext.Provider value={currentTheme}>
			{children}
		</ThemeContext.Provider>
  )
}

export const useThemeContext = () => {
	return useContext(ThemeContext)
}
