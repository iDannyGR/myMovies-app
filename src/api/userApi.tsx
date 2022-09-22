import axios from 'axios'

export const Users = ()=>{
    axios.create({
        baseURL : 'https://reqres.in/api/',
    });
}