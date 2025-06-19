import api from "../intercepter";

export const placeOrder = async (orderData) => {
  const res = await api.post(`/api/orders`, orderData);
  return res?.data || [];
};

export const getOrders = async () => {
  const res = await api.get(`/api/orders`);
  return res?.data || [];
};

export const getOrder = async (orderId) => {
  const res = await api.get(`/api/orders/${orderId}`);
  return res?.data || [];
};
