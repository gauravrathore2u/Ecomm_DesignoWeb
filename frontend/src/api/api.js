import axios from "axios";

const url = process.env.REACT_APP_SERVER_URL;
const userUrl = url + "/v1/user";
const prodUrl = url + '/v1/products';

export const postSignup = async (user) => {
  try {
    return await axios.post(`${userUrl}/signup`, user);
  } catch (error) {
    console.log(error.message);
  }
};

export const postLogin = async (user) => {
  try {
    return await axios.post(`${userUrl}/login`, user);
  } catch (error) {
    console.log(error.message);
  }
};


export const getProduct = async (category)=>{
    try {
        if(category === "all"){
            return await getAllProducts();
        }
        else{
            return await axios.get(`${prodUrl}/?category=${category}`);
        }
    } catch (error) {
        console.log(error.message);
    }
}

export const getAllProducts = async ()=>{
    try {
        return await axios.get(prodUrl);
    } catch (error) {
        console.log(error.message);
    }
}

export const getSingleProd = async (id)=>{
    try {
        return await axios.get(`${prodUrl}/${id}`);
    } catch (error) {
        console.log(error.message);
    }
}


export const postAdditem = async(product)=>{
  try {
    return await axios.post(`${prodUrl}/add`, product);
  } catch (error) {
    console.log(error.message);
  }
}

export const patchUpdateItem = async(product)=>{
  try {
    return await axios.patch(`${prodUrl}/${product.id}`);
  } catch (error) {
    console.log(error.message);
  }
}

export const deleteUpdateItem = async (productid)=>{
  try {
    return await axios.delete(`${prodUrl}/${productid}`)
  } catch (error) {
    console.log(error.message);
  }
}