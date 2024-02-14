import { ChangeEvent } from "react";
import { useSearchParams } from "react-router-dom";

const DEFAULT_ITEMS = ["Computer", "Book", "Bike", "Keyboard", "Cup"];

function Store() {
  // const [searchParams, setSearchParams] = useSearchParams({
  //   q: "",
  //   onlyComputerItems: false,
  // });

  // * STATE MANAGEMENT WITH USESEARCHPARAMS
  const [searchParams, setSearchParams] = useSearchParams();

  const q = searchParams.get("q") || "";
  const onlyComputerItems = searchParams.get("onlyComputerItems") === "true";

  const items: string[] = DEFAULT_ITEMS.filter((item) => {
    return (
      item.toLowerCase().includes(q?.toLowerCase()) &&
      (!onlyComputerItems ||
        (onlyComputerItems && (item === "Computer" || item === "Keyboard")))
    );
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newQ = e.target.value;
    setSearchParams(
      { q: newQ, onlyComputerItems: String(onlyComputerItems) },
      { replace: true }
    );
  };

  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newOnlyComputerItems = e.target.checked;
    setSearchParams(
      { q, onlyComputerItems: String(newOnlyComputerItems) },
      { replace: true }
    );
  };

  return (
    <>
      <h1>Store</h1>
      <div>
        <label htmlFor="q">Title</label>
        <input
          type="text"
          id="q"
          value={q}
          // onChange={(e) =>
          //   setSearchParams((prev) => {
          //     prev.set("q", e.target.value);
          //     return prev;
          //   })
          // }
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="onlyComputerItems">Only computer items</label>
        <input
          type="checkbox"
          id="onlyComputerItems"
          checked={onlyComputerItems}
          // onChange={(e) =>
          //   setSearchParams((prev) => {
          //     prev.set("onlyComputerItems", e.target.checked);
          //     return prev;
          //   })
          // }
          onChange={handleCheckboxChange}
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
