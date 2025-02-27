import React from "react";
import { Link } from "react-router";

export default function Blog() {
  return (
    <div className="max-w-3xl mx-auto bg-white p-6 shadow-md rounded-lg mt-6">
      <h2 className="text-2xl font-semibold text-gray-800">Welcome to the Blog Page</h2>
      <p className="text-gray-600 mt-2">Explore our latest articles.</p>
      <Link to="/bloglist" className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Go to Blog List
      </Link>
    </div>
  );
}
