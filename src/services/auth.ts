import axios from 'axios';

const auth = axios.create({
  baseURL: import.meta.env.VITE_AUTH_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

const AuthService = {
  login: (body: { email: string; password: string }) =>
    auth
      .post(`login`, body)
      .then((response) => response.data)
      .catch((err) => err),

  register: (body: { username: string; email: string; password: string }) =>
    auth
      .post(`register`, body)
      .then((response) => response)
      .catch((err) => err),

  logout: () =>
    auth
      .post(`logout`)
      .then((response) => response)
      .catch((err) => err),
  getCurrentUser: () =>
    auth
      .get(`profile`)
      .then((response) => response)
      .catch((err) => err),
};

export default AuthService;
