import { Link, useNavigate, useLocation } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div style={{ padding: "20px" }}>
      <h1>Home</h1>
      <p>当前路径: {location.pathname}</p>
      <button onClick={() => navigate("/about")}>跳转到关于页</button>
      <div style={{ marginTop: "20px" }}>
        <Link to="/users/1001">查看用户 1001</Link>
        <br />
        <Link to="/dashboard">进入仪表盘（嵌套路由）</Link>
        <br />
        <Link to="/">进入首页</Link>
      </div>
    </div>
  );
};

export default Home;
