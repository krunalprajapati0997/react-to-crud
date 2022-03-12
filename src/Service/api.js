import axios from 'axios';

// const usersUrl = 'http://localhost:3003/users';
const usersUrl = 'http://localhost:6009';

export const getUsers = async (id) => {
    id = id || '';
    return await axios.get(`http://localhost:6009/${id}`);
}

export const addUser = async (user) => {
    return await axios.post('http://localhost:6009',user);
}

export const deleteUser = async (id,user) => {
    return await axios.delete(`${usersUrl}/${id}`, user);
}
    
export const editUser = async (id, user) => {
    return await axios.put(`${usersUrl}/${id}`, user)
}