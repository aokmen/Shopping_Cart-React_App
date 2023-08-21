import React from "react";
import axios from "axios"

const url = "https://64d5e4f1613ee4426d97bae4.mockapi.io/shopping"
const ProductCard = ({info,getInfos}) => {


 const handleDelete = async (id) => {
  
    await axios.delete(`${url}/${id}`)
       
    getInfos()
 }
 
const minus =  async (id,amount) => {

  await axios.put(`${url}/${id}`,
  {amount:amount-1})
  getInfos()
}
const plus =  async (id,amount) => {
  
  await axios.put(`${url}/${id}`,
  {amount:amount+1})
  getInfos()
}




  return (
  <div className="card shadow-lg mb-3 ">
   {info.map(({name,image,price,amount,id})=>(
    
   <div className="row g-0 cards" key={id}>
       <div className="col-md-5 ">
        <img
          src={image}
          className="w-100 h-100 rounded-start object-fit-contain"
          alt={name}
          title={""}
        />
      </div>
      <div className="col-md-7">
        <div className="card-body">
          <h5 className="card-title t-color" role="button">
            {name}
          </h5>
          <div className="product-price">
            <p className="text-warning h2">
              $<span className="damping-price ">{(price*0.8).toFixed(2)}</span>
              <span className="h5 text-dark text-decoration-line-through m-2">
                {price}
              </span>
            </p>
          </div>
          <div className="border border-1 border-dark shadow-lg d-flex justify-content-center p-2">
            <div className="quantity-controller">
              <button className="btn btn-secondary btn-sm" 
              onClick={()=>minus(id,amount)}>
                <i className="fas fa-minus"></i>
              </button>
              <p className="d-inline mx-4 t-color" id="product-quantity">
              {amount}
              </p>
              <button className="btn btn-secondary btn-sm" 
              onClick={()=>plus(id,amount)}>
                <i className="fas fa-plus"></i>
              </button>
            </div>
          </div>
          <div className="product-removal mt-4">
            <button className="btn btn-color btn-sm w-100 remove-product" onClick={()=>handleDelete(id)}>
              <i className="fa-solid fa-trash-can me-2"></i>Remove
            </button>
          </div>
          <div className="mt-2 t-color">
            Product Total: $<span className="product-line-price">{(price*0.8*amount).toFixed(2)}</span>
          </div>
     </div>
   </div>
 </div>
   ))}
  
    </div>
  );
};

export default ProductCard;
