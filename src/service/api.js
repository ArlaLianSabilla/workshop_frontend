import axios from 'axios';

const instance = axios.create({
    baseURL: 'localhost:5050'
})

export default () => {
    return instance 
} 

