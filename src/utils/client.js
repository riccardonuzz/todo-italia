import axios from 'axios';


const excludedUrls = [
    '/auth/login',
    '/register'
];

const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API,
});

axiosInstance.interceptors.request.use((config) => {
    // Do something before request is sent

    const { url } = config;

    if (!excludedUrls.includes(url)) {
        const authToken = localStorage.getItem('auth_token');

        if (authToken)
            config.headers['Authorization'] = `bearer ${authToken}`;
    }

    return config;
}, (error) => Promise.reject(error));


export default axiosInstance;
