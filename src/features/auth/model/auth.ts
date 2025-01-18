import { z } from 'zod'


export const loginSchema = z.object({
  email: z.string()
    .email('Некорректный email'),
  password: z.string()
    .min(6, 'Минимум 6 символов')
    .max(32, 'Максимум 32 символа')
})

export const registerSchema = z.object({
  email: z.string()
    .email('Некорректный email'),
  password: z.string()
    .min(6, 'Минимум 6 символов')
    .max(32, 'Максимум 32 символа'),
})

export type LoginFormData = z.infer<typeof loginSchema>
export type RegisterFormData = z.infer<typeof registerSchema>
