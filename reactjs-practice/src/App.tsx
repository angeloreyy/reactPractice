import Message from "./Message";
import ListGroup from "./components/ListGroup";
function App() {
  let items = [
    "Cebu City",
    "Mandaue City",
    "Lapu-lapu City",
    "Consolacion",
    "Liloan",
  ];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  return (
    <div>
      <ListGroup
        items={items}
        heading={"Cities"}
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;
