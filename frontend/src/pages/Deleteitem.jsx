import React, { useEffect, useState } from "react";
import { getAllProducts } from '../api/api'
import { deleteUpdateItem } from "../api/api";

const Deleteitem = () => {
    const [allProduct, setAllProduct] = useState([]);
    const [productId,setProductId ] = useState("");
    useEffect(()=>{
        async function getAllProd(){
            const response = await getAllProducts();
            setAllProduct(response?.data.data)
        }
        getAllProd();
    },[]);
    const onSubmit = async()=>{
        const response = await deleteUpdateItem({productId})
        console.log(response.data);
        alert('item updated successfully');
    }
  return (
    <div>
      <div className="bg-slate-100 h-[100vh]">
        <div className="w-[70%] md:w-[30%] m-auto">
          <p className="text-3xl font-bold">Delete Item</p>
          <div className="flex flex-col gap-3 font-bold">
            <label htmlFor="name">*Product Name:</label>
            <select
              id="name"
              onChange={(e) => setProductId(e.target.value)}
              value={productId}
              className="bg-slate-200 p-2 rounded-md"
            >
              {allProduct.map((prod) => (
                <option key={prod._id} value={prod._id}>
                  {prod.productName}
                </option>
              ))}
            </select>

           
           
          </div>

          <div className="flex gap-2 items-center justify-center">
            <button
              onClick={onSubmit}
              className="bg-blue-500 w-20 h-8 rounded-md"
            >
              Delete
            </button>
            
          </div>
        </div>
      </div>
    </div>
  );
};


export default Deleteitem