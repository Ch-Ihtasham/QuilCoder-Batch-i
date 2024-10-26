import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider, Route, createRoutesFromElements } from 'react-router-dom'
import Home from './pages/home.jsx'
import Contact from './pages/contact.jsx'
import Blog from './pages/blog.jsx'
import Github from './pages/Github.jsx'
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
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />,
//     children: [
//       {
//         path: '',
//         element: <Home />
//       },
//       {
//         path: 'blog',
//         element: <Blog />
//       },
//       {
//         path: 'contact',
//         element: <Contact />
//       }
//     ]
//   }

// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<Home />} />
      <Route path='blog' element={<Blog />} />
      <Route path='contact' element={<Contact />} />
      <Route path='github' element={<Github />} />

    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
