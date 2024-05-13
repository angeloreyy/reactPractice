import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  //Event Handler

  //Hook or StateHook
  const [selectedIndex, setSelectedIndex] = useState(-1);
  [0][1]; //variable (selectedIndex)

  const getMessage = (c: number) => {
    if (c == 1) return items.length === 0 ? <p>No Items Found!</p> : null;
    else if (c == 0) return items.length === 0 ? <p>no items found!</p> : null;
  };

  return (
    <>
      <h1>{heading}</h1>
      {/*renders && statement if first condition is true; otherwise renders first condition 
      STOPPED AT: https://youtu.be/SqcY0GlETPk?t=2312
      */}
      {items.length === 0 && <p>No Items Found!</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
