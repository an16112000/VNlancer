import axios from "axios";

const axiosInstance = axios.create({
    baseURL: process.env.API_URL
})
function setAuthenticationAccessToken(accessToken: string) {
    axiosInstance.defaults.headers['Authorization'] = `Bearer ${accessToken}`;
}

function updateAuthenticationAccessToken(accessToken: string) {
    axiosInstance.defaults.headers['Authorization'] = `Bearer ${accessToken}`;
}

export { axiosInstance, setAuthenticationAccessToken as setHeader, updateAuthenticationAccessToken as updateHeader };