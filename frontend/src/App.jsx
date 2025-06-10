import { Routes, Route, NavLink } from "react-router-dom";
import Home from "./Pages/Home";
import AddProduct from "./Pages/AddProduct";
import Products from "./Pages/Products";
import './App.css';
import './Navbar.css';

export default function App() {
  return (
    <div>
      <nav className="navbar">
        <NavLink to="/" className={({isActive}) => isActive ? "nav-link active" : "nav-link"} end>Home</NavLink>
        <NavLink to="/add" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>Add Product</NavLink>
        <NavLink to="/products" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>Products</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddProduct />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </div>
  );
}
