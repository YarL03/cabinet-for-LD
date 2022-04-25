import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "bd2de8d1-4755-465f-a340-e726db124cb0"
    }
})

export const ClientsAPI = {
    getClients: (currentPage, pageSize) =>  {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)},

    getClient: (id) => instance.get(`profile/${id}`)
        .then(response => response.data),

    getOnlineUsers: () => instance.get('users?count=10')
    .then(response => response.data.items)
}

export const AuthAPI = {
    getIsAuth: () => instance.get(`auth/me`)
        .then(response => response.data)
}

export const ProfileAPI = {
    setStatus: () => instance.put(`status`)
}