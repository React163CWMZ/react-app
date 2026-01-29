import { useState } from "react";
import Message from "./Message";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

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
      <Message></Message>
      {alertVisible && <Alert onClose={AlertClose}>hello,warning</Alert>}
      <Button color="warning" onClick={AlertShow}>
        My Button
      </Button>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      ></ListGroup>
    </div>
  );
}
export default App;
