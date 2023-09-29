import React, { useState } from 'react'
import '../modules/ShoppinglistStyle.css'
import Item from '../modules/items';

export default function ShoppingList() {

  const [itemList, setItemList] = useState<Item[]>([]);
  const [productName, setProductName] = useState<string>("");
  const [itemQuantity, setQuantity] = useState<number>(1);
  const handleSubmit = (e: ReactFormEvent) => {
    e.preventDefault();
    if (productName) {
      const newItem: Item = { product: productName, quantity: itemQuantity };
      setItemList(prevItems => [...prevItems, newItem]);
      setProductName("");
      setQuantity(1);
    }
  }
  const totalQuantity = itemList.reduce((accumulatedQuantity, currentItem) => {
    return Number(accumulatedQuantity) + Number(currentItem.quantity);
  }, 0);
  return (
    <div className="container">
      <div className="form-container sub-container">
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
            min='1'
            value={itemQuantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="list-container sub-container">
        <ul>
          <h2>You have {itemList.length}
            {itemList.length > 1 || itemList.length === 0 ? ' items ' : ' item '}
            on your list.
          </h2>
          {itemList.map((item, index) => (
            <li key={index}>{item.quantity} {item.product}</li>
          ))}
        </ul>

        <h3 id="totalCount">Total item count is  {totalQuantity}</h3>
      </div>
    </div >
  )
}