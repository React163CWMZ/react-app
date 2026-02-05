import { useState } from "react";
import Message from "./Message";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
import ButtonCustom from "./components/ButtonCustom/ButtonCustom";
import Like from "./components/Like";
import Quiz from "./components/Quiz";
import { Link } from "react-router-dom";

function App() {
  let items = ["New York", "Tokyo", "Peiking", "Paris"];
  function handleSelectItem(item: string) {
    console.log(item);
  }

  const [alertVisible, setAlertVisible] = useState(false);
  function AlertShow() {
    setAlertVisible(true);
  }

  function AlertClose() {
    setAlertVisible(false);
  }
  return (
    <div>
      {/* 全局导航栏 */}
      <nav style={{ padding: "20px", backgroundColor: "#f5f5f5" }}>
        <Link to="/" style={{ marginRight: "15px" }}>
          首页
        </Link>
        <Link to="/home" style={{ marginRight: "15px" }}>
          Home
        </Link>
        <Link to="/user" style={{ marginRight: "15px" }}>
          User
        </Link>
        <Link to="/about" style={{ marginRight: "15px" }}>
          关于
        </Link>
      </nav>

      <Quiz></Quiz>
      <Like></Like>
      <Message></Message>
      {alertVisible && <Alert onClose={AlertClose}>hello,warning</Alert>}
      <Button color="warning" onClick={AlertShow}>
        My Button
      </Button>
      <ButtonCustom />
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      ></ListGroup>
    </div>
  );
}
export default App;
