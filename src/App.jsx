import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from "./About";
import DeviceDisplay from "./DeviceDisplay";
function App() {
  // const [count, setCount] = useState(0)
  const router = createBrowserRouter([
    {
      path: "/",
      element: <DeviceDisplay />
    },
    {
      path: "/about",
      element: <About />
    },
  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App;
