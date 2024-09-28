import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const linkStyle = {
    margin: '0 10px',
    textDecoration: 'none',
    color: 'black',
  };

  const activeStyle = {
    fontWeight: 'bold',
    color: 'blue',
  };

  return (
    <nav style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>
      <NavLink to="/" exact style={linkStyle} activeStyle={activeStyle}>
        Home
      </NavLink>
      <NavLink to="/products" style={linkStyle} activeStyle={activeStyle}>
        Products
      </NavLink>
      <NavLink to="/about" style={linkStyle} activeStyle={activeStyle}>
        About
      </NavLink>
      <NavLink to="/contact" style={linkStyle} activeStyle={activeStyle}>
        Contact
      </NavLink>
    </nav>
  );
};

export default Navbar;
