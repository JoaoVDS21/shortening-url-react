import axios from 'axios'

const http = axios.create({
    baseURL: 'https://api.shrtco.de/v2'
})

export default {
    getShortedLink: async (url) => {
        let response = await http.get(`/shorten?url=${url}`)
        return response.data
    }
}