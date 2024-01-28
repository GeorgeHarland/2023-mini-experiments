import { createBrowserRouter, Link, RouterProvider } from "react-router-dom"
import MainPage from "./pages/MainPage"

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <MainPage />
    },
    {
      path: '/2',
      element: <Link to='/' style={{color: 'white', textDecoration: 'none'}}>Page 1</Link>
    }
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App
