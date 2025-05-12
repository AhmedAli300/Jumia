import axios from 'axios';

const BASE_URL = 'http://localhost:3000/api/v1/carts'; 
const authHeader = () => {
  const token = localStorage.getItem('token');  
  console.log('Auth Token:', localStorage.getItem('token'));

  return {
    headers: {
      Authorization: `Bearer ${token}`, 
    },
  };
};

export const getCart = () => {
  return axios.get(BASE_URL, authHeader()) ;  
};

export const addToCart = (productId, quantity) => {
  console.log('Calling addToCart with:', productId, quantity); 

  return axios.post(
    BASE_URL,
    { productId, quantity },
    authHeader()
  );
};

export const updateCartItem = (productId, quantity) => {
  return axios.patch(
    BASE_URL,
    { productId, quantity },
    authHeader() 
  );
};

export const removeCartItem = (productId) => {
  return axios.delete(`${BASE_URL}/${productId}`, 
    authHeader()
  );
};

export const clearCart = () => {
  return axios.get(`${BASE_URL}/clearCart`, authHeader());  
};
