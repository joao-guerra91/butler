import axios from "axios";

const baseUrl = `${process.env.REACT_APP_FINAL_PROJECT_API}/api`;

export const getAllPosts = () => {
  return axios.get(`${baseUrl}/posts`);
};

export const getPost = (id) => {
  return axios.get(`${baseUrl}/posts/${id}`);
};

export const deletePost = (id) => {
  return axios.delete(`${baseUrl}/posts/${id}`);
}

export const addPost = (post) => {
  return axios.post(`${baseUrl}/posts`, post);
};

export const updatePost = (updatedPost) => {
  return axios.put(`${baseUrl}/posts/${updatedPost._id}`, updatedPost);
};

export const uploadFile = (uploadData) => {
  return axios.post(`${baseUrl}/upload`, uploadData);
};



/* Authentication Routes */

export const signup = (username, email, password) => {
  return axios.post(`${baseUrl}/signup`, { username, email, password });
};

export const login = (username, password) => {
  return axios.post(
    `${baseUrl}/login`,
    { username, password },
    { withCredentials: true }
  );
};

export const logout = () => {
  return axios.post(`${baseUrl}/logout`, null, {withCredentials: true});
}

export const loggedin = () => {
  return axios.get(`${baseUrl}/loggedin`, {withCredentials: true});
}
