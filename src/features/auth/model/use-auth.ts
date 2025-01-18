import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'
import authApi from '../api/auth'
import { useUserStore } from '@/entities/user/model/store'

export const useLogin = () => {
  const router = useRouter()
  const { fetchUser } = useUserStore()

  return useMutation({
    mutationFn: authApi.login,
    onSuccess: async (data) => {
      localStorage.setItem('token', data.accessToken)
      await fetchUser()
      router.push('/')
      toast.success('Вы успешно вошли в аккаунт')
    },
    onError: () => {
      toast.error('Неверный email или пароль')
    }
  })
}

export const useRegister = () => {
  const router = useRouter()
  const { fetchUser } = useUserStore()

  return useMutation({
    mutationFn: authApi.register,
    onSuccess: async (data) => {
      localStorage.setItem('token', data.accessToken)
      await fetchUser()
      router.push('/')
      toast.success('Вы успешно зарегистрировались')
    },
    onError: () => {
      toast.error('Ошибка при регистрации')
    }
  })
}