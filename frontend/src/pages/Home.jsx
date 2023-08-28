import React, { useEffect, useState } from "react";
import Header from "../components/Header";
// import Categories from "../components/Categories";
import ProductCard from "../components/ProductCard";
import { getAllProducts, getProduct } from "../api/api";

const Home = () => {
  const categories = ["all", "cake", "vegitable", "fruit", "pizza", "burger"];
  const [products, setProducts] = useState([]);
  useEffect(()=>{
    async function fetchdata (){
      let response = await getAllProducts();
      setProducts(response?.data.data);
    }
    fetchdata();
  },[])
  const onCategory = async (el) => {
    let response = await getProduct(el);
    setProducts(response?.data.data);
  };

  return (
    <div>
      <div>
        <Header />
        <div>
          <div className="flex items-center text-xl justify-center gap-3 m-5">
            {categories.map((el) => (
              <div
                key={el}
                onClick={() => {
                  return onCategory(el);
                }}
                className="h-9 w-20 text-center bg-blue-400"
              >
                {el}
              </div>
            ))}
          </div>
        </div>
        <div className="flex">
        {products.map((product)=>(
          <ProductCard key={product._id} product={product}/>
        ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
