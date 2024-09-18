import { Outlet } from "react-router-dom"
import Home from "./pages/Home"
import Navbar from "./shared/Navbar"

function App() {

  return (
    <>
      <Navbar/>
      <Outlet/>
    </>
  )
}

export default App
