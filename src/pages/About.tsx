import { Link, useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  return (
    <div style={{ padding: "20px" }}>
      <h1>关于我们</h1>
      <button onClick={() => navigate(-1)}>返回上一页</button>
      <br />
      <Link to="/">返回首页</Link>
    </div>
  );
};

export default About;
