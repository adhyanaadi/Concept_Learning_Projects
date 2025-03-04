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
  const [category, setCategory] = useState([]);
  //function to load all the ctaegories and store them in category state.
  useEffect(() => {
    fetch("/ecommerce_items.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => console.log(response))
      .then((response) => response.json())
      // .then((response)=>(response.filter(item.id===1))
      .then((response) => console.log(response))
      .then((data) => {
        const uniqueCategories = [
          ...new Set(data.map((item) => item.category)),
        ];
        setCategory(uniqueCategories);
      })
      .catch((error) => console.log(error));
  }, []);
  // useEffect(() => {
  //   fetch("/ecommerce_items.json", {
  //     headers: {
  //       "Content-Type": "application/json",
  //       Accept: "application/json",
  //     },
  //   })
  //     .then((response) => response.json())  // Convert response to JSON
  //     .then((data) => {
  //       console.log(data); // Log data to confirm it's loaded
  //       const uniqueCategories = [...new Set(data.map((item) => item.category))];
  //       setCategory(uniqueCategories);
  //       console.log(category)
  //     })
  //     .catch((error) => console.log("Fetch error:", error));
  // }, []);
  
  return (
    <div>
      {/* Component to load all the categories and on clicking them visit the page to that category. */}
      {category.map((item, index) => {
        // <Link to="/items/:{item}">{item}</Link>;
        <div key={index}>
          <Link to={`/items/${item}`}>{item}</Link>
        </div>;
      })}
    </div>
  );
};

export default Home;
