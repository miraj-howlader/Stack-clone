import axios from 'axios';


const BASE_URL = import.meta.env.NODE === 'development'
? 'http://localhost:5001/api'
:'https://stack-backend-pi.vercel.app/api'

export const axiosInstance = axios.create({
    baseURL: BASE_URL,
    withCredentials: true,
})