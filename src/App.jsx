import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from "./About";
import DeviceDisplay from "./DeviceDisplay";
import SignUp from "./SignUp";
import LogIn from "./LogIn";
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
    {
      path: "/register",
      element: <SignUp />
    },
    {
      path: "/login",
      element: <LogIn />
    }
  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App;
