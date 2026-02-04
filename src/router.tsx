import { createBrowserRouter, RouteObject } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

// 路由配置
export const router: RouteObject[] = [
  { path: "/", element: <App /> },
  { path: "/home", element: <Home /> },
  { path: "/about", element: <About /> },
  {
    path: "*", // 404 兜底路由
    element: <NotFound />,
  },
];

// 创建浏览器路由
export const browserRouter = createBrowserRouter(router);
