import { useEffect, useState } from 'react'
import './App.css'
import Cards from './components/Cards'
import ThemeBtn from './components/ThemeBtn'
import { ThemeProvider } from './contexts/ThemeContext'
import Card2 from './components/Card2'

function App() {
  const [themeMode, setThemeMode] = useState('light')
  const lightMode = () => {
    setThemeMode('light')
  }
  const darkMode = () => {
    setThemeMode('dark')
  }
  useEffect(() => {
    document.querySelector('html').classList.remove('light', 'dark')
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])


  return (
    <ThemeProvider value={{ themeMode, lightMode, darkMode }} >
      <ThemeBtn />
      <Cards />
      <Card2 />
    </ThemeProvider>
  )
}

export default App
