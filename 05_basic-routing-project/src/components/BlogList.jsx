// useSearchParams() returns an array:
// searchParams: An object that allows retrieving query parameters.
// setSearchParams: A function to update the query parameters in the URL.
// searchParams.get("search"): Extracts the search query parameter from the URL.

import React from "react";
import { Link, useSearchParams } from "react-router"; // Fix incorrect import

const blogPosts = [
  { id: "1", title: "React Basics" },
  { id: "2", title: "React Router Guide" },
];

export default function BlogList() {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get("search") || "";
  const filteredPosts = blogPosts.filter((post) =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="max-w-2xl mx-auto p-6">
      {/* Search Input */}
      <input
        type="text"
        placeholder="Search Posts..."
        value={searchQuery}
        onChange={(e) => setSearchParams({ search: e.target.value })}
        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {/* Blog Posts List */}
      <div className="mt-4 space-y-3">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
            <div key={post.id} className="bg-white p-4 shadow-md rounded-lg">
              <Link
                to={`/blog/${post.id}`}
                className="text-lg font-semibold text-blue-600 hover:underline"
              >
                {post.title}
              </Link>
            </div>
          ))
        ) : (
          <p className="text-gray-500 mt-4">No posts found.</p>
        )}
      </div>
    </div>
  );
}
