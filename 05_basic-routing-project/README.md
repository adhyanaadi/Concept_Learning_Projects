# 📘 React Router Blog Project

A React blog application demonstrating the core features of React Router v6, including nested routes, dynamic routes, query parameters, and 404 handling, all styled using Tailwind CSS.

## 🚀 Features

✅ **React Router Integration** - Implements `<Routes>`, `<Route>`, `<Link>`, and `<Outlet>` for structured navigation.  
✅ **Dynamic Routing** - Uses `useParams()` to fetch blog post details dynamically.  
✅ **Nested Routes** - Demonstrates sub-routes inside `/about` (Team and Contact).  
✅ **Query Parameters** - Implements a blog search using `useSearchParams()`.  
✅ **404 Page Handling** - Handles unmatched routes using a `NotFound` component.  
✅ **Tailwind CSS for Styling** - Provides a modern UI with a responsive design.  

---

## 📜 What I Learned

### 1️⃣ React Router Basics  
- Setting up routes with `<Routes>` and `<Route>`.  
- Using `<Link>` instead of `<a>` for client-side navigation.  
- Handling 404 pages with a wildcard (`*`) route.  

### 2️⃣ Dynamic & Nested Routing  
- Passing dynamic parameters in the URL (`/blog/:id`).  
- Fetching dynamic route parameters using `useParams()`.  
- Nesting routes inside `About.jsx` with `<Outlet>` for rendering subpages (`/about/team`, `/about/contact`).  

### 3️⃣ Query Parameters with `useSearchParams()`  
- Implementing search functionality using query parameters (`?search=query`).  
- Updating the URL without reloading the page.  

### 4️⃣ Layout Components & Code Organization  
- Using a `Navbar` component for consistent navigation across pages.  
- Structuring the project into components and pages for better maintainability.  

### 5️⃣ Styling with Tailwind CSS  
- Applying responsive layouts using Tailwind utilities.  
- Enhancing buttons, input fields, and navigation links with hover and focus effects.  

---

