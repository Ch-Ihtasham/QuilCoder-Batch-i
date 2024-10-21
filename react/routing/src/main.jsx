import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Route, createRoutesFromElements } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import Home from './pages/Home.jsx'
import Contact from './pages/Contact.jsx'
import Blog from './pages/Blog.jsx'
// import Github, { fetchData } from './pages/Github.jsx'
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
//         path: 'contact',
//         element: <Contact />
//       },
//       {
//         path: 'blog',
//         element: <Blog />
//       }
//     ]

//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />} >
      <Route path='' element={<Home />} />
      <Route path='blog' element={<Blog />} />
      <Route path='contact' element={<Contact />} />
      {/* <Route path='github/:username' element={<Github />} /> with the use of parms  */}
      {/* <Route path='github' element={<Github />} loader={fetchData} /> */}
      <Route path='github' element={<Github />} loader={async () => {
        try {
          const response = await fetch('https://api.github.com/users/ch-ihtasham')
          const apiData = await response.json()
          return apiData
        }
        catch (error) {
          console.error("hello errorrrrr gggg",error)
          return { error: 'Failed to load GitHub user data' };
        }
      }} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
