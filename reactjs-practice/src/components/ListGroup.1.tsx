export function ListGroup() {
  let items = [
    "Cebu City",
    "Mandaue City",
    "Lapu-lapu City",
    "Consolacion",
    "Liloan",
  ];
  items = [];
  const getMessage = (c: number) => {
    if (c == 1) return items.length === 0 ? <p>No Items Found!</p> : null;
    if (c == 0 && <p>no items found!</p>);
  };
  return (
    <>
      <h1>City List</h1>
      {getMessage(0)}
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}
