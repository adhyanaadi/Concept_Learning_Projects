// //Without end:
// If you have a <NavLink to="/" >Home</NavLink>, it will match both / and any nested routes like /about, /contact, etc., because React Router does partial matching by default. This means the "Home" link could stay highlighted even when navigating to another page.

// With end:
// Adding end ensures that the Home link is active only when the URL is exactly /. If the URL is /about or /dashboard, it won’t be considered active anymore.
// Why <NavLink> Instead of <Link>?

// <NavLink> automatically applies an "active" class when the link matches the current URL.


import React from "react";
import { Link } from "react-router";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h2 className="text-white text-xl font-bold">My Blog</h2>
        <ul className="flex space-x-4">
          <li><Link to="/" className="text-white hover:underline">Home</Link></li>
          <li><Link to="/blog" className="text-white hover:underline">Blog</Link></li>
          <li><Link to="/bloglist" className="text-white hover:underline">Blog List</Link></li>
          <li><Link to="/about" className="text-white hover:underline">About</Link></li>
          <li><Link to="/admin" className="text-white hover:underline">Admin</Link></li>
        </ul>
      </div>
    </nav>
  );
}

