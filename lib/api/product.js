import api from "../axios";

export const getProducts = async ({ limit, skip, sortBy, order }) => {
  const params = { limit, skip };
  if (sortBy) {
    params.sortBy = sortBy;
    params.order = order || "asc";
  }
  const res = await api.get("/products", { params });
  return res.data;
};

export const searchProducts = async ({ q, limit, skip }) => {
  const res = await api.get("/products/search", {
    params: { q, limit, skip },
  });
  return res.data;
};

export const getProductsByCategory = async ({ category, limit, skip }) => {
  const res = await api.get(`/products/category/${category}`, {
    params: { limit, skip },
  });
  return res.data;
};

export const getCategories = async () => {
  const res = await api.get("/products/categories");
  return res.data;
};

export const getProduct = async (id) => {
  const res = await api.get(`/products/${id}`);
  return res.data;
};

export const addProduct = async (payload) => {
  const res = await api.post("/products/add", payload);
  return res.data;
};

export const updateProduct = async (id, payload) => {
  const res = await api.put(`/products/${id}`, payload);
  return res.data;
};

export const deleteProduct = async (id) => {
  const res = await api.delete(`/products/${id}`);
  return res.data;
};