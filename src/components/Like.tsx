import { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

const Like = () => {
  const toggle = () => {
    setStatus(!status);
  };
  const [status, setStatus] = useState(false);
  if (status)
    return (
      <AiFillHeart color="#ff6b81" size={20} onClick={toggle}></AiFillHeart>
    );

  return (
    <AiOutlineHeart color="#ff6b81" size={20} onClick={toggle}></AiOutlineHeart>
  );
};

export default Like;
