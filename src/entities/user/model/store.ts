import { create } from 'zustand'
import userApi from '../api/user'
import { User } from './user'

interface UserState {
  user: User | null
  isLoading: boolean
  error: string | null
  fetchUser: () => Promise<void>
}

export const useUserStore = create<UserState>((set) => ({
  user: null,
  isLoading: false,
  error: null,
  fetchUser: async () => {
    try {
      set({ isLoading: true, error: null })
      const user = await userApi.getMe()
      set({ user, isLoading: false })
    } catch (error) {
      set({ 
        user: null,
        error: 'Ошибка при получении данных пользователя', 
        isLoading: false 
      })
    }
  }
}))