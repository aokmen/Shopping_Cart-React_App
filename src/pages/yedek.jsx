import React, { useState } from "react";
import axios from "axios"
const NewProduct = () => {

  const nullProduct ={
    name:"",
    price:0,
    quantity:1,
    image:""
  }
  const [form, setForm] = useState(nullProduct);

  const { name, price, quantity, image } = form;

  const postInfo = async () => {

   
      await axios.post("https://64d5e4f1613ee4426d97bae4.mockapi.io/shopping",
      {
        name:name,
        price:price,
        quantity:quantity,
        image:image
      }
    

  )}
  const handleSubmit = (e) => {
    e.preventDefault();
    postInfo()
    

  }
 console.log(form); 
  return <div className="container ">
    <form className="w-50 mx-auto bg-body-secondary m-4 p-3 rounded-1 ">
      <h1 className="text-center mb-4">Product Name</h1>
  <div className="form-group">
    <label htmlFor="formGroupExampleInput">Product Name</label>
    <input
      type="text"
      className="form-control mt-2 mb-2"
      id="formGroupExampleInput"
      placeholder="Enter a product name"
      onChange={(e)=>setForm({...form,name:e.target.value})}
      required
    />
  </div>
  <div className="form-group">
    <label htmlFor="formGroupExampleInput2" className="mt-2 ">Product Price</label>
    <input
      type="number"
      className="form-control mt-2 mb-2"
      id="formGroupExampleInput2"
      placeholder="0"
      onChange={(e)=>setForm({...form,price:e.target.value})}
      required
    />
  </div>
  <div className="form-group">
    <label htmlFor="formGroupExampleInput2" className="mt-2 ">Product Quantity</label>
    <input
      type="number"
      className="form-control mt-2 mb-2"
      id="formGroupExampleInput2"
      placeholder="1"
      onChange={(e)=>setForm({...form,quantity:e.target.value})}
      required
    />
  </div>
  <div className="form-group">
    <label htmlFor="formGroupExampleInput" className="mt-2 mb-2">Product Image</label>
    <div className="input-group mb-3">
      <span className="input-group-text span">https://example.com/</span>
      <input
        type="url"
        className="form-control"
        id="formGroupExampleInput"
        placeholder="Enter a product name"
        onChange={(e)=>setForm({...form,image:e.target.value})}
        aria-describedby="basic-addon3"
        required
      />
    </div>
  </div>
  <div className="text-center mt-4"><button 
  type="submit"
  className="add-to-cart btn btn-success" onClick={handleSubmit}>🛍️ Save To New Product</button></div>
  
</form>

  </div>;
};

export default NewProduct;
