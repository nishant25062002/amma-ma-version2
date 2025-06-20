import api from "../intercepter";

export const addSubscriber = async (data) => {
  const res = await api.post(`/api/subscribers`, data);
  return res?.data || [];
};
