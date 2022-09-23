import { instance } from "./base.api";
const endpoint = "/trending/movie/day";

export const movies = {
    getAll: ({ page=1 }:{page: number}) => { 
        return instance.get(endpoint, {
            params: {
                page
        } } )
    }
}