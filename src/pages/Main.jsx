import React from "react";
import {useNavigate} from "react-router-dom"


const Main = () => {

  const navigate = useNavigate()
  return (
    <main className="main">
      <div className="main-card">
        <h1>Welcome to Shopping Cart Application</h1>
        <div className="main-buttons">
          <button className="btn btn-outline-primary px-4" onClick={()=>navigate("/new-product")}>
            Add New Product
          </button>
          <button className="btn btn-primary px-4 ms-3 see" onClick={()=>navigate("/product-list")}>See Products</button>
        </div>
      </div>
    </main>
  );
};

export default Main;
