import React from "react";
import { Link, Outlet } from "react-router"; // Fixed incorrect import

export default function About() {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">About Us</h2>
      <p className="text-gray-600">
        This is the about page! Learn more about our team and how to contact us.
      </p>

      {/* Navigation Links */}
      <nav className="mt-6 flex space-x-4 border-b pb-2">
        <Link
          to="team"
          className="text-blue-600 hover:text-blue-800 font-medium transition"
        >
          Team
        </Link>
        <Link
          to="contact"
          className="text-blue-600 hover:text-blue-800 font-medium transition"
        >
          Contact
        </Link>
      </nav>

      {/* Nested Route Content */}
      <div className="mt-6">
        <Outlet />
      </div>
    </div>
  );
}
