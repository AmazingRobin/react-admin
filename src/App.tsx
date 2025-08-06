import { useLocation, useNavigate, useRoutes } from "react-router-dom"
import router from "./router"
import { useEffect } from "react";
import { message } from "antd";

function ToPage( { path }: { path: string } ){
  const navigateTo = useNavigate();
  useEffect(() => {
    navigateTo(path);
  }, [navigateTo, path]);
  return null;
}

function BeforeRouterEnter(){
  const Outlet = useRoutes(router)
  const token = localStorage.getItem('token')
  const location = useLocation()
  if(!token && location.pathname !== '/login'){
    message.warning('请先登录')
    return <ToPage path="/login" />
  }
  if(token && location.pathname === '/login'){
    message.success('您已登录')
    return <ToPage path="/page1" />
  }
  return Outlet
}

function App() {

  return (
    <>
      <BeforeRouterEnter />
    </>
  )
}

export default App
