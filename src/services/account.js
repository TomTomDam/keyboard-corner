import axios from "axios";

const accountApi = "http://localhost:3000/api/account";

export default {
  login: (user) => {
    return axios
      .post(`${accountApi}/login`, {
        username: user.username,
        password: user.password,
      })
      .catch((err) => {
        console.log(err);
      });
  },

  logout: () => {
    return axios.post(`${accountApi}/logout`).catch((err) => {
      console.log(err);
    });
  },

  register: (user) => {
    return axios
      .post(`${accountApi}/register`, {
        firstName: user.firstName,
        lastName: user.lastName,
        username: user.username,
        email: user.email,
        password: user.password,
      })
      .catch((err) => {
        console.log(err);
      });
  },

  verifyToken: () => {
    axios.post(`${accountApi}/token`).catch((err) => {
      console.log(err);
    });
  },
};
