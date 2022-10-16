import axios from 'axios'

const instance = axios.create({
    baseURL: "https://gigo-tinder-backend.herokuapp.com",
});

export default instance;