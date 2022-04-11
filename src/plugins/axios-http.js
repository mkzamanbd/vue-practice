// plugins/axios-http.js
import axios from 'axios';
const BASE_URL = 'https://api.kzaman.me/api'
//set default value on axios
export const xHttpRequest = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
});

xHttpRequest.interceptors.request.use(config => {
    const token = localStorage.getItem('token') ? localStorage.getItem('token') : false;
    if (token) {
        config.headers.common["Authorization"] = 'Bearer ' + token;
    }
    return config;
},
error => {
    return Promise.reject(error);
});

xHttpRequest.interceptors.response.use(
    (response) => {
        if (response.status === 200 || response.status === 201) {
            return Promise.resolve(response);
        } else {
            return Promise.reject(response);
        }
    },
    (error) => {
        if (error.response.status) {
            switch (error.response.status) {
                case 400:
                    alert("Bad request");
                    break;
                case 401:
                    alert("Unauthorized request");
                    break;
                case 403:
                    alert("Access forbidden");
                    break;
                case 404:
                    alert("URL not exists");
                    break;
                case 500:
                    alert("Internal server error");
                    break;
                case 502:
                    setTimeout(() => {
                        alert('Bad gateway');
                    }, 1000);
            }
            return Promise.reject(error.response);
        }
    }
);
