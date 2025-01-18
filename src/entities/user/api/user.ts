import { api } from "@/shared/api/api"
import { User } from "../model/user"

const userApi = {
  getMe: async () => {
    const response = await api.get<User>('/users/me')
    return response.data
  }
}

export default userApi