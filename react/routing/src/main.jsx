import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import Home from './pages/Home.jsx'
import Contact from './pages/Contact.jsx'
import Blog from './pages/Blog.jsx'
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Home />
//   },
//   {
//     path: '/contact',
//     element: <Contact />
//   },
//   {
//     path: '/blog',
//     element: <Blog />
//   }
// ])

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <Home />
      },
      {
        path: 'contact',
        element: <Contact />
      },
      {
        path: 'blog',
        element: <Blog />
      }
    ]

  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
