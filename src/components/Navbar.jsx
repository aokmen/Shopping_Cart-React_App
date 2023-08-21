import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [show, setShow] = useState(false)
  return (
    <nav className="navbar navbar-expand-lg navbar bg-muted">
    <Link className="nav-link disabled fs-5 m-1 brand" to="/">
      Shopping Cart
    </Link>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
      onClick={()=>setShow(!show)}
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className= {show ? "collapse navbar-collapse show" : "collapse navbar-collapse"} id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link" to="/">
            Home <span className="sr-only">(current)</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/new-product">
          New Product
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/product-list">
          Product List
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " to="/about">
            About
          </Link>
        </li>
      </ul>
    </div>
  </nav>
  
  );
}

export default Navbar