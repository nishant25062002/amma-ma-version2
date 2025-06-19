import api from "../intercepter";

export const placeOrder = async (orderData) => {
  const res = await api.get(`/api/orders`, orderData);
  return res?.data || [];
};
