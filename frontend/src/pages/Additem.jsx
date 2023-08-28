import React, { useState } from "react";
import { postAdditem } from "../api/api";
import { useSelector } from 'react-redux';

const Additem = () => {
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState(null);
  const [category, setCategory] = useState("");
  const user = useSelector((state)=>state.user);

  const onSubmit = async()=>{
      const response = await postAdditem({productName,price,category,isAdmin:user.isAdmin});
      console.log(response.data);
      alert("Item added successfully");
  }
  const onClear = ()=>{
    setProductName("");
    setPrice(null);
    setCategory("");

  }
  return (
    <div className="bg-slate-100 h-[100vh]">
      <div className="w-[70%] md:w-[30%] m-auto">
        <p className="text-3xl font-bold">Add Item</p>
        <div className="flex flex-col gap-3 font-bold">
          <label htmlFor="name">*Product Name:</label>
          <input
            type="text"
            required
            onChange={(e) => setProductName(e.target.value)}
            value={productName}
            name="name"
            id="name"
            className="bg-slate-200 p-2 rounded-md"
          />

          <label htmlFor="age" className="md:ml-5">
            *Price:
          </label>
          <input
            type="number"
            onChange={(e) => setPrice(e.target.value)}
            value={price}
            name="age"
            id="age"
            className="bg-slate-200 p-2 rounded-md md:w-20"
          />

          <label htmlFor="name">*Category:</label>
          <input
            type="text"
            required
            onChange={(e) => setCategory(e.target.value)}
            value={category}
            name="name"
            id="name"
            className="bg-slate-200 p-2 rounded-md"
          />
        </div>

        <div className="flex gap-2 items-center justify-center">
          <button
            onClick={onSubmit}
            className="bg-blue-500 w-20 h-8 rounded-md"
          >
            Add
          </button>
          <button
            onClick={onClear}
            className="bg-slate-500 w-20 h-8 rounded-md"
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default Additem;
