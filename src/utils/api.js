import axios from "axios";
const BASE_URl = "https://api.themoviedb.org/3";
const TMDB_TOKEN = import.meta.env.VITE_APP_TMDB_TOKEN;
console.log(TMDB_TOKEN)

const headers = {
    Authorization: "bearer " +
        TMDB_TOKEN,
}

export const fetchDataFromApi = async (url, params) => {
console.log(BASE_URl + url)    
    try {
        const { data } = await axios.get(BASE_URl + url, {
            headers,
            params,
        })
        return data;
    }
    catch (error) {
        console.log(error)
        return error;
    }

}