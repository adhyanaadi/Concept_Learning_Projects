// our Navbar.jsx is inside the components/ folder and is included in App.jsx. The routes are defined in App.jsx, but they are automatically available to any component inside the <Router> tree.
// ✅ Yes, wrapping <Router> inside App.jsx is the same as wrapping the whole app with <BrowserRouter> in main.jsx.

import { Routes, Route } from "react-router";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import PostDetail from "./pages/PostDetail";
import NotFound from "./pages/NotFound";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import Admin from "./pages/Admin";
import BlogList from "./components/BlogList";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}>
          <Route path="team" element={<Team />} />
          <Route path="contact" element={<Contact />} />
        </Route>
        <Route path="/blog" element={<Blog />} />
        <Route path="/bloglist" element={<BlogList />} />
        <Route path="/blog/:id" element={<PostDetail />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/admin" element={<Admin />}/>
      </Routes>
    </>
  );
}

export default App;