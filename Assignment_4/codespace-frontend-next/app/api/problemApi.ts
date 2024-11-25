import axios from "axios";
import apiClient from "./apiClient";

export const fetchALLProblems=async ()=>{
    const apiUrl = "http://localhost:3000/problem";
    try{
        //const response = await axios.get(apiUrl);
        const response=await apiClient('/problem');
        return response.data;
    }
    catch(error)
    {
        console.log("Full URL:", `${apiClient.defaults.baseURL}/problem`);
        console.log("error fetching problems "+error);
        throw  error;
    }
};

// const fetchProblemById=async (id)=>{
//     try{
//         const response=await apiClient(`/problem/${id}`);
//         return response.data;
//     }
//     catch(error)
//     {
//         console.log("error fetching problem "+id+" "+error);
//         throw error;
//     }
// }
