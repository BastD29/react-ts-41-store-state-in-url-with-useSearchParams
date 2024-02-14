import { useState } from "react";

const DEFAULT_ITEMS: string[] = ["Computer", "Book", "Bike", "Keyboard", "Cup"];

function Store() {
  // * STATE MANAGEMENT WITH USESTATE
  const [q, setQ] = useState<string>("");
  const [onlyComputerItems, setOnlyComputerItems] = useState<boolean>(false);

  const items: string[] = DEFAULT_ITEMS.filter((item) => {
    return (
      item.toLowerCase().includes(q?.toLowerCase()) &&
      (!onlyComputerItems ||
        (onlyComputerItems && (item === "Computer" || item === "Keyboard")))
    );
  });

  return (
    <>
      <h1>Store</h1>
      <div>
        <label htmlFor="q">Title</label>
        <input
          type="text"
          id="q"
          value={q}
          onChange={(e) => setQ(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="onlyComputerItems">Only computer items</label>
        <input
          type="checkbox"
          id="onlyComputerItems"
          checked={onlyComputerItems}
          onChange={(e) => setOnlyComputerItems(e.target.checked)}
        />
      </div>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default Store;
