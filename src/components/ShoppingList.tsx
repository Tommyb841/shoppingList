import React, { useState } from 'react'
import Greeter from './Greeter'

import Item from '../modules/items';
import HomeButton from './HomeButton';
export default function ShoppingList() {
  const [itemList, setItemList] = useState<Item[]>([]);
  const [productName, setProductName] = useState<string>("");
  const [itemQuantity, setQuantity] = useState<number>(0);
  const handleSubmit = (e: ReactFormEvent) => {
    e.preventDefault();
    if (productName) {
      const newItem: Item = { product: productName, quantity: itemQuantity };
      setItemList(prevItems => [...prevItems, newItem]);

      setProductName("");
    }
  }
  return (
    <>
      <h1>Shopping List</h1>
      <br />
      <h2>Item name</h2>
      <form onSubmit={handleSubmit}>
        <input type="text"
          value={productName} placeholder="Enter Item"
          onChange={(e) => setProductName(e.target.value)}
        />
        <br />
        <h3>Quantity</h3>
        <input type="number"
          value={itemQuantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
        <br />
        <button type="submit">Submit</button>
        <ul>
          <h3>On your list</h3>
          {itemList.map((item, index) => (
            <li key={index}>{item.quantity} {item.product}</li>
          ))}
        </ul>
      </form>
      <HomeButton />
    </>
  )
}