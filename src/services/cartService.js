import axios from 'axios';

const BASE_URL = 'http://localhost:3000/api/v1/carts';

export const getCart = () => {
  return axios.get(BASE_URL);
};

export const addToCart = (productId, quantity) => {
  return axios.post(
    BASE_URL,
    { productId, quantity }
  );
};

export const updateCartItem = (productId, quantity) => {
  return axios.put(
    `${BASE_URL}/update-quantity`,
    { productId, quantity }
  );
};

export const removeCartItem = (productId) => {
  return axios.delete(`${BASE_URL}/${productId}`);
};

export const clearCart = () => {
  return axios.delete(BASE_URL);
};
