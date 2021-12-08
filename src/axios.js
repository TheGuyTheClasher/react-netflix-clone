import axios from "axios";

// base url for all API requests
const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3"
});

// eg usage
// instance.get('/movie') // baseURL + '/movie'

export default instance;