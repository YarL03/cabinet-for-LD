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

    getOnlineUsers: () => instance.get('users?count=10')
    .then(response => response.data.items)
}

export const AuthAPI = {
    getIsAuth: () => instance.get(`auth/me`)
        .then(response => {debugger
             return response.data}),
    
    login: (formState) => instance.post(`auth/login`, {
        ...formState
    }),

    logout: () => instance.post(`auth/logout`)
}

export const ProfileAPI = {
    updateStatus: (status) => instance.put(`profile/status`, {status}),

    getStatus: (id) => instance.get(`profile/status/${id}`),
    
    getUserData: (id) => instance.get(`profile/${id}`)
        .then(response => response.data),
} 