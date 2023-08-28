import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getSingleProd } from '../api/api';

const ProductDetail = () => {
    const params = useParams();
    console.log(params);
    const [product, setProduct]  = useState({});
    useEffect(()=>{
        async function getSingleProduct(){
            let response = await getSingleProd(params.id);
            setProduct(response?.data.data);
        }
        getSingleProduct();
    },[params.id])
    console.log(product);
  return (
    <div >
        <div id='left'>
            Product Name: {product.productName}
        </div>
        <div id='right' >
            <p className='m-5'>Rs.{product.price}</p>
          <p className='m-5'> Category: {product.category}</p>
        </div>
        <button className='bg-slate-500 rounded-md p-2 m-5'>Add to Cart</button>
    </div>
  )
}

export default ProductDetail