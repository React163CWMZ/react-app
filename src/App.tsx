import Message from "./Message";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

function App() {
  let items = ["New York", "Tokyo", "Peiking", "Paris"];
  function handleSelectItem(item: string) {
    console.log(item);
  }
  function onClick() {
    console.log("clicked");
  }
  return (
    <div>
      <Message></Message>
      <Alert>hello,warning</Alert>
      <Button color="warning" onClick={onClick}>
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
