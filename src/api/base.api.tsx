import axios from 'axios';

export const UrlApi:string = 'https://api.themoviedb.org/3/'
export const api = axios.create({
    baseURL: UrlApi,
    params: {
        api_key: 'c378e61dad694db6110bd4e337a3fbeb',
    }
})
