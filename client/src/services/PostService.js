import http from "../http-common";

// CREATE
const create = data => {
  return http.post("/posts", data);
};

// RETRIEVE
const getAll = () => {
  return http.get("/posts");
};

const get = id => {
  return http.get(`/posts/${id}`);
};

//UPDATE
const update = (id, data) => {
  return http.put(`/posts/${id}`, data);
};

// DELETE
const remove = id => {
  return http.delete(`/posts/${id}`);
};

const removeAll = () => {
  return http.delete(`/posts`);
};

// FIND
const findByTitle = title => {
  return http.get(`/posts?title=${title}`);
};

// EXPORT
export default {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByTitle
};
