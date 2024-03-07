import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import Logo from "../assets/images/e-com logo.avif";
import { useCart } from "../context/CartContext";
import "../styles/Navbar.css";

const Navbar = () => {
  const { cartItems } = useCart();
  return (
    <div className='navbar'>
      <div className='logo-container'>
        <img src={Logo} alt='logo' />
        <h1>Ekart</h1>
      </div>
      <div className='search-container'>
        <input type='search' placeholder='Search the Product...' />
      </div>
      <ul className='nav-links'>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/cart'>
            <ShoppingCartIcon />
          </Link>
          <span>{cartItems.length}</span>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
