// When a user clicks a blog post, they should see its details.
// We use useParams() to get the post ID from the URL.

import React from "react";
import { useParams } from "react-router";

export default function PostDetail() {
  const { id } = useParams();

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 shadow-md rounded-lg mt-6">
      <h2 className="text-2xl font-semibold text-gray-800">Post Detail - {id}</h2>
      <p className="text-gray-600 mt-2">This is a detailed view of blog post {id}.</p>
    </div>
  );
}
