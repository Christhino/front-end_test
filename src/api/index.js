import axios from "axios";

const  apiClient =  axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers : {
        'Content-Type' :  'application/json',
    }
})

export default  {
    getAllUser() {
        return apiClient.get('/users');
    },
    getUsersMe() {
        return apiClient.get('/users/1');
    },
    getPhoto() {
        return apiClient.get('/photos');
    },
    getComments() {
        return apiClient.get('/comments')
    },
    getTodos() {
        return apiClient.get('/todos')
    }
}