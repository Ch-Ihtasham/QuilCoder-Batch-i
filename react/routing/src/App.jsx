import { Outlet } from 'react-router-dom'
import Header from './components/Header/Header'
import Fotter from './components/Fotter/Fotter'
function App() {
  return (
    <div>
      <Header />
      <Outlet />
      <Fotter />

    </div>
  )
}

export default App
