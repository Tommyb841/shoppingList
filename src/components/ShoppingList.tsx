import React, { useState, useEffect } from 'react'
import '../modules/ShoppinglistStyle.css'
import Item from '../modules/items';
import axios from 'axios'

export default function ShoppingList() {

  const [itemList, setItemList] = useState<Item[]>([]);
  const [itemName, setItemName] = useState<string>("");
  const [itemQuantity, setQuantity] = useState<number>(1);

  useEffect(() => {
    axios.get<Item[]>('http://localhost:1337/products')
      .then(response => setItemList(response.data))
      .catch(error => console.error("There was an error fetching the products", error));
  }, []);

  const handleSubmit = async (e: ReactFormEvent) => {
    e.preventDefault();
    if (itemName) {
      const newItem: Item = {
        productName: itemName, quantity: itemQuantity
      };
      try {
        const response = await axios.post<Item>('http://localhost:1337/products', newItem)
        setItemList(prevItems => [...prevItems, response.data]);
        setItemName("");
        setQuantity(1);

      } catch (error) {
        console.error("There was an error adding the product", error);
      }
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
            value={itemName} placeholder="Enter Item"
            onChange={(e) => setItemName(e.target.value)}
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
          {itemList.map((item) => (
            <li key={item.id}>{item.quantity} {item.productName}</li>
          ))}
        </ul>

        <h3 id="totalCount">Total item count is  {totalQuantity}</h3>
      </div>
    </div >
  )
}