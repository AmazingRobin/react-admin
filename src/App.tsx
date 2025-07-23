
import { useRoutes } from "react-router-dom"
import router from "./router"


function App() {
  const Outlet = useRoutes(router)

  return (
    <>
      {Outlet}
    </>
  )
}

export default App
