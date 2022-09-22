import axios from 'axios'

export const ApiMovie = ()=> {axios.create({
    baseURL : 'https://api.themoviedb.org/3/',
    params:{
        api_key: 'c378e61dad694db6110bd4e337a3fbeb',
    }
});
}