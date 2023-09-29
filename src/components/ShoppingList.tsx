import React, { useState } from 'react'
import Item from '../modules/items'
export default function ShoppingList() {
  const [itemList, setItemList] = useState<Item>([]);
  const [inputValue, setInputValue] = useState<string>("");
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue) {
      const newItem: Item = { product: inputValue, price: 0 }; // Assuming a price of 0 for now, you can modify this accordingly
      setItemList(prevItems => [...prevItems, newItem]);
      setInputValue("");
    }
  }
  return (
    <>
      <h1>This is the shopping list</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text" value={inputValue} placeholder="Add Item ..."
          onChange={(e) => setInputValue(e.target.value)} />
        <button type="submit">Submit</button>
        <ul>
          {itemList.map((item, index) => (
            <li key={index}>{item.product}</li>
          ))}
        </ul>
      </form>
    </>

  )
}
// need to add data base functionality 