import axios from "axios";

const apiClient=axios.create({
    baseURL:process.env.NEXT_PUBLIC_API_BASE_URL,
    headers:{
        'Content-Type': 'application/json',
    },
    timeout: 5000,
});

// apiClient.interceptors.request.use((config)=>{
//     const token=localStorage.getItem('token');
//     if(token)
//     {
//         config.headers.Authorization=`Bearer ${token}`;
//     }
//     return config;
// })
apiClient.interceptors.response.use(
    (response)=>response,
    (error)=>{
        console.log("API Error:"+error);
        return Promise.reject(error);
    }
)
export default apiClient;