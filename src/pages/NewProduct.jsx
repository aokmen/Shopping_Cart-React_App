import React, { useState } from 'react'
import axios from "axios"





const NewProduct = () => {
  const firstForm = {
    name:"",
    price:0,
    amount:1,
    image:""
  }

const [form, setForm] = useState(firstForm)
const {name,amount,price,image} = form

const postInfo = async() => {
  await axios.post(
    'https://64d5e4f1613ee4426d97bae4.mockapi.io/shopping',form
  );
}
const handleSubmit =(e) => {
  e.preventDefault()
  postInfo()
  console.log(form);
  setForm(firstForm)
}

  return (
      <article id="add-product" className="mb-4 mt-4 mx-auto product">
        <h1 className="text-center">New Product</h1>
        <form className="p-2" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="add-name" className="form-label">
              Product Name
            </label>
            <input
            type="text"
            className="form-control"
            id="add-name"
            placeholder='Add a product...'
            value={name}
            onChange={(e)=>setForm({...form,name:e.target.value})}
            required />
          </div>
          <div className="mb-3">
            <label htmlFor="add-price" className="form-label">
              Product Price
            </label>
            <input
              type="number"
              className="form-control"
              id="add-price"
              value={price}
              onChange={(e)=>setForm({...form,price:e.target.value})}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="add-quantity" className="form-label">
              Product Quantity
            </label>
            <input
              type="number"
              className="form-control"
              id="add-quantity"
              value={amount}
              onChange={(e)=>setForm({...form,amount:e.target.value})}
              required
            />
          </div>
          <label htmlFor="add-image" className="form-label">
            Product Image
          </label>
          <div className="input-group mb-3">
         
            <input
              placeholder='https://example.com/'
              type="url"
              className="form-control"
              id="add-image"
              value={image}
              aria-describedby="basic-addon3"
              onChange={(e)=>setForm({...form,image:e.target.value})}
              required
            />
          </div>
          <div className="text-center">
          <button
            type="submit"
            className="add-to-cart btn btn-color2 btn-sm m-4">
            <i className="fa-solid fa-cart-plus me-2"></i>Save To New Product
          </button>
          </div>
        </form>
      </article>
    );
}

export default NewProduct