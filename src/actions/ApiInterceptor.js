import axios from 'axios';

const api = axios.create();

// Add a response interceptor
api.interceptors.response.use(
response => {
    console.log("dans interceptor ok");
    return response;
},
error => {
    if (error.response && error.response.status === 401) {
        localStorage.clear()
        window.location.assign('/')        
        return Promise.reject(error);
    }
}
)
;

export default api;