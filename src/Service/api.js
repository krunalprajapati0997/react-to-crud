import axios from 'axios';

// const usersUrl = 'http://localhost:3003/users';
const usersUrl = 'http://localhost:7001';

export const getUsers = async (id) => {
    id = id || '';
    return await axios.get(`http://localhost:7001/${id}`);
}

export const addUser = async (id) => {
    return await axios.post(`${usersUrl}/${id}`);
}

export const deleteUser = async (id) => {
    return await axios.delete(`${usersUrl}/${id}`);
}
    
export const editUser = async (id, user) => {
    return await axios.put(`${usersUrl}/${id}`, user)
}