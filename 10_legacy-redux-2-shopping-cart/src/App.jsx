import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Items from "./pages/Items";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar"; // Import Navbar

function App() {
  return (
    <>
      <Navbar /> {/* Include Navbar here */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/items/:category" element={<Items />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
