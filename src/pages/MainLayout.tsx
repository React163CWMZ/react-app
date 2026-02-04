import { Link, Outlet, useLocation } from "react-router-dom";

// 全局主布局：包含导航栏、侧边栏、内容区域
const MainLayout = () => {
  const location = useLocation(); // 获取当前路由路径，用于高亮导航

  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      {/* 顶部导航栏 */}
      <header
        style={{
          padding: "0 20px",
          height: "60px",
          backgroundColor: "#2c3e50",
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <h2>React Router v7 嵌套布局示例</h2>
        <nav>
          <Link
            to="/home"
            style={{
              color: "white",
              marginLeft: "20px",
              textDecoration: location.pathname === "/" ? "underline" : "none",
            }}
          >
            首页
          </Link>
          <Link
            to="/home/about"
            style={{
              color: "white",
              marginLeft: "20px",
              textDecoration:
                location.pathname === "/about" ? "underline" : "none",
            }}
          >
            关于
          </Link>
          <Link
            to="/home/settings"
            style={{
              color: "white",
              marginLeft: "20px",
              textDecoration:
                location.pathname === "/home/settings" ? "underline" : "none",
            }}
          >
            设置
          </Link>
        </nav>
      </header>

      {/* 主体内容：侧边栏 + 内容区 */}
      <div style={{ display: "flex", flex: 1 }}>
        {/* 侧边栏 */}
        <aside
          style={{
            width: "200px",
            backgroundColor: "#f8f9fa",
            padding: "20px",
          }}
        >
          <h3>侧边导航</h3>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li style={{ margin: "10px 0" }}>
              <Link
                to="/home"
                style={{ textDecoration: "none", color: "#333" }}
              >
                首页
              </Link>
            </li>
            <li style={{ margin: "10px 0" }}>
              <Link
                to="/home/about"
                style={{ textDecoration: "none", color: "#333" }}
              >
                关于
              </Link>
            </li>
            <li style={{ margin: "10px 0" }}>
              <Link
                to="/home/settings"
                style={{ textDecoration: "none", color: "#333" }}
              >
                设置
              </Link>
            </li>
          </ul>
        </aside>

        {/* 子路由出口：嵌套页面会渲染在这里 */}
        <main style={{ flex: 1, padding: "20px" }}>
          <Outlet />
        </main>
      </div>

      {/* 页脚 */}
      <footer
        style={{
          padding: "10px 20px",
          backgroundColor: "#2c3e50",
          color: "white",
          textAlign: "center",
        }}
      >
        © 2026 React Router v7 示例
      </footer>
    </div>
  );
};

export default MainLayout;
