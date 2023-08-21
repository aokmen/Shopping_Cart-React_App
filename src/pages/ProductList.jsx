
import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import CardTotal from "../components/CardTotal";

import axios from "axios"



const ProductList = () => {

  const [info, setInfo] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const url= "https://64d5e4f1613ee4426d97bae4.mockapi.io/shopping"

  const getInfos = async () => {

    try {
      const {data} = await axios.get(url)
      if (data !==[]) setInfo(data)
      setError(false)

    } catch (error) {
      console.log(error);
      setError(true)
    } finally{
      setLoading(false)
    }
  }

  useEffect(() => {
  getInfos()
  }, [])

  return (
    <div className="container mt-3">
      <div className={"bg-light d-sm-block d-md-flex "}>
        
      {loading ? <p className="text-center  error w-100">Loading....</p> : info.length > 0 ? 
      <>
      <article id="product-panel" className="col-md-5 " >
        <ProductCard info={info} getInfos={getInfos}/>
      </article>
      <article className="col-md-5 m-3">
        <CardTotal info={info}/>
      </article>
    </> : !error && <p className="text-center text-danger w-100">No products data...</p>
    }
    {error && <p className="text-center error w-100">Error...</p>}
      
      </div>
    </div>
  );
};

export default ProductList;
