import { createBrowserRouter, RouteObject } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import About from "./pages/About";
import Settings from "./pages/Settings";
import MainLayout from "./pages/MainLayout";
import User from "./pages/User";
import NotFound from "./pages/NotFound";

// 路由配置
export const router: RouteObject[] = [
  { path: "/", element: <App /> },
  { path: "/user", element: <User /> },
  { path: "/settings", element: <Settings /> },
  { path: "/about", element: <About /> },
  {
    path: "*", // 404 兜底路由
    element: <NotFound />,
  },
  {
    path: "/home", // 父路由的路径
    element: <MainLayout />, // 父路由要渲染的布局组件
    children: [
      // children = 该父路由下的所有子路由
      { path: "", element: <Home /> }, // 关键：空路径匹配 / → Outlet 渲染 Home
      { path: "settings", element: <Settings /> }, // 匹配 /settings 时，在Outlet显示
      { path: "about", element: <About /> }, // 匹配 /about 时，在Outlet显示About
    ],
  },
];

// 创建浏览器路由
export const browserRouter = createBrowserRouter(router);
