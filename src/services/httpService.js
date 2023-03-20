// httpService.js 
import axios from "axios"

axios.defaults.baseURL = "http://178.173.147.89:7000/api";

axios.interceptors.response.use(null, error => {

    const expectedError =
        error.response &&
        error.response.status >= 400 &&
        error.response.status < 500;
    if (!expectedError) {
        console.log("Logging the error", error);
        alert("An unexpected error occurred");
    }
    return Promise.reject(error);
});

const HttpService = {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete,
    patch: axios.patch,
    options: axios.options,
}

export default HttpService;