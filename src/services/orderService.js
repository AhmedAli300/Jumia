import axios from 'axios';

const BASE_URL = 'http://localhost:3000/api/v1/orders';

const authHeader = () => {
  const token = localStorage.getItem('token');
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

};

const orderService = {
  createOrder: async (orderData) => {
    const res = await axios.post(BASE_URL, orderData, authHeader());
    return res.data;
  },

  getAllOrders: async () => {
    const res = await axios.get(BASE_URL, authHeader());
    return res.data;
  },

  getOrderById: async (id) => {
    const res = await axios.get(`${BASE_URL}/${id}`, authHeader());
    return res.data;
  },

  updateOrderStatus: async (id, status) => {
    const res = await axios.patch(`${BASE_URL}/${id}`, { status }, authHeader());
    return res.data;
  },

  deleteOrder: async (id) => {
    const res = await axios.delete(`${BASE_URL}/${id}`, authHeader());
    return res.data;
  },
};

export default orderService;
