import http from "../http-common";

// CREATE
const create = data => {
  return http.post("/user", data);
};

//UPDATE
const update = (id, data) => {
  return http.put(`/user/${email}`, data);
};

// EXPORT
export default {
  create,
  update,
};
