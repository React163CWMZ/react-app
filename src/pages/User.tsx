import { Link, useNavigate } from "react-router-dom";
import NativeForm from "../components/NativeForm";
const User = () => {
  const navigate = useNavigate();

  return (
    <div style={{ padding: "20px" }}>
      <NativeForm />
      <button onClick={() => navigate(-1)}>返回上一页</button>
      <br />
      <Link to="/">返回首页</Link>
    </div>
  );
};

export default User;
