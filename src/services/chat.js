import axios from "axios";

export const chatWithBot = async(question)=>{
    try {
        const response = await axios.post(`http://localhost:8000/api/query/search`,{
            question
        });
        return { data: response?.data, error: false}
    } catch (error) {
        return { message: error?.message, error: true}
    }
};
