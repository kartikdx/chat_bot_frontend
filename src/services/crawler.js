import axios from "axios"

export const scrapeData = async(url)=>{
    try {
        const response = await axios.post(`http://localhost:8000/api/scrape`,{url});
        return { data: response?.data, error: false}
    } catch (error) {
        return { message: error?.message, error: true}
    }
}