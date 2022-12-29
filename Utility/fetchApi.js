
import axios from 'axios'
const baseUrl = "https://youtube-search-results.p.rapidapi.com/youtube-search"

export const fetchApi = async (url) => {
    const { data } = await axios.get(`${baseUrl}${url}`
        , {
            headers: {
                'X-RapidAPI-Key': 'ded75447abmsh32fc5bc89f6ff90p19c48bjsn9bccde2d40d0',
                'X-RapidAPI-Host': 'youtube-search-results.p.rapidapi.com'
            }
        }
    );
    return data
}


