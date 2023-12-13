import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import { PackingList } from "./PackingList.1";
import { Stats } from "./Stats";

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handletoggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleListClear() {
    const confirmed = window.confirm(
      "Are you sure you want o delete all items?"
    );

    if (confirmed) setItems([]);
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handletoggleItem}
        onClearList={handleListClear}
      />
      <Stats items={items} />
    </div>
  );
}
