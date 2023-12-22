import React from 'react'
import { useThemeContext } from '../context/themeContext'

export default function Home() {
    const theme =  useThemeContext()
    return (
        <div>
           
        <h1>Home</h1>
        </div>
    )
}