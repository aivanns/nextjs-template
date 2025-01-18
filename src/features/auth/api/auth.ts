import { api } from "@/shared/api/api";
import { LoginFormData, RegisterFormData } from "../model/auth";

const authApi = {
  login: async (data: LoginFormData) => {
    const response = await api.post('/auth/sign-in', data)
    return response.data
  },
  register: async (data: RegisterFormData) => {
    const response = await api.post('/auth/sign-up', data)
    return response.data
  },
  logout: async () => {
    const response = await api.post('/auth/sign-out')
    return response.data
  },
  refresh: async () => {
    const response = await api.post('/auth/refresh', {
      withCredentials: true
    })
    return response.data
  }
}

export default authApi;