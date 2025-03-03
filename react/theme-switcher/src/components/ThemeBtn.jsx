import React from 'react'
import { useTheme } from '../contexts/ThemeContext'

export default function ThemeBtn() {
    const { themeMode, darkMode, lightMode } = useTheme()
    function themeToggle() {
        console.log("Current Theme:", themeMode)
        if (themeMode === 'light') {
            darkMode()
        } else {
            lightMode()
        }
        console.log("New Theme:", themeMode)
    }

    return (
        <div className='border border-black w-max'>
            <button onClick={themeToggle}>{themeMode} Mode</button>
        </div>
    )
}
