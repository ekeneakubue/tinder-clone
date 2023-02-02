import axios from 'axios'

const instance = axios.create({
    baseURL: "https://tinder-backend-rk4v.onrender.com",
});

export default instance;
