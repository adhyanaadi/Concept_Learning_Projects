import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router";
import store from "../redux/store/store";

const Navbar = () => {
  const [cartCount, setCartCount] = useState(0);
  const [categories, setCategories] = useState([]);
  const location = useLocation();
  const { category } = useParams();

  useEffect(() => {
    fetch("/ecommerce_items.json")
      .then((response) => response.json())
      .then((data) => {
        const uniqueCategories = [...new Set(data.map((item) => item.category))];
        setCategories(uniqueCategories);
      })
      .catch((error) => console.error("Error fetching categories:", error));
  }, []);

  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      const cartItems = store.getState();
      const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
      setCartCount(totalItems);
    });

    return () => unsubscribe();
  }, []);

  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <div className="flex items-center space-x-6">
        <Link to="/" className="hover:text-yellow-400">Home</Link>
        <Link to="/cart" className="hover:text-yellow-400">Cart 🛒 ({cartCount})</Link>
        <span className="text-gray-300">Categories:</span>
        {categories.map((cat, index) => (
          <Link key={index} to={`/items/${cat}`} className="hover:text-yellow-400">{cat}</Link>
        ))}
      </div>
      {location.pathname.includes("/items/") && category && (
        <span className="font-bold text-yellow-400">Viewing Category: {category.toUpperCase()}</span>
      )}
    </nav>
  );
};

export default Navbar;
