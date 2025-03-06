// Yes, we use new Set() to ensure that only unique categories are stored in the categories state. Here’s
// A Set in JavaScript is not an array; it’s a different type of data structure. So, when we do:
// new Set(data.map(item => item.category))
// this returns a Set object, not an array. However, React expects state updates (setCategories) to be arrays (since .map() and .map(item => ...) expect arrays too).
// To convert a Set into an array, we use the spread operator ([...]):
// fetch("/data/ecommerce_items.json") will not work because files inside src/ are not directly accessible.
// React only allows static assets in the public/ folder.
import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const Home = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("/ecommerce_items.json")
      .then((response) => response.json())
      .then((data) => {
        const uniqueCategories = [...new Set(data.map((item) => item.category))];
        setCategories(uniqueCategories);
      });
  }, []);

  return (
    <div className="text-center mt-10">
      <h2 className="text-3xl font-bold mb-6">Browse Categories</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {categories.map((category, index) => (
          <Link key={index} to={`/items/${category}`} className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">{category}</Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
