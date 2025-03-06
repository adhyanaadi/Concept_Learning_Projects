import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import store from '../redux/store/store';
import { itemAdded, itemRemoved } from '../redux/actions/cartActions';

const Items = () => {
  const [items, setItems] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    fetch('/ecommerce_items.json')
      .then((response) => response.json())
      .then((data) => {
        setItems(data.filter((item) => item.category === category));
      });
  }, [category]);

  return (
    <div className="max-w-3xl mx-auto bg-white p-6 shadow-lg rounded-lg mt-6">
      <h2 className="text-2xl font-bold mb-4">{category} Items</h2>
      {items.map((item, index) => (
        <div key={index} className="flex justify-between items-center p-3 border-b">
          <p>{item.description}</p>
          <p>${item.price.toFixed(2)}</p>
          <div className="space-x-2">
            <button className="bg-green-500 text-white px-3 py-1 rounded" onClick={() => store.dispatch(itemAdded(item))}>Add</button>
            <button className="bg-red-500 text-white px-3 py-1 rounded" onClick={() => store.dispatch(itemRemoved(item.category, item.id))}>Remove</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Items;
