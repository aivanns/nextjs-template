'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button, Input } from '@heroui/react'
import { registerSchema, type RegisterFormData } from '../model/auth'
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from '@heroui/react'
import { useRegister } from '../model/use-auth'

export function RegisterForm() {
  const { t } = useTranslation()
  const [isVisible, setIsVisible] = useState(false)
  
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: '',
      password: '',
    }
  })

  const { mutate: registerUser, isPending } = useRegister()

  const onSubmit = async (data: RegisterFormData) => {
    console.log('Submitting registration:', data)
    registerUser(data)
  }

  const toggleVisibility = () => setIsVisible(!isVisible)

  return (
    <div className="w-full max-w-sm p-8 bg-white rounded-xl shadow-lg border border-neutral-200">
      <form 
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-6"
      >
        <div className="text-center">
          <h1 className="text-2xl font-bold text-neutral-900">
            {t('auth.register')}
          </h1>
          <p className="mt-2 text-neutral-600">
            Создайте свой аккаунт
          </p>
        </div>

        <div className="space-y-4">
          <Input
            {...register('email')}
            type="email"
            label={t('auth.email')}
            variant="bordered"
            isInvalid={!!errors.email}
            errorMessage={errors.email?.message}
            autoComplete="email"
            classNames={{
              label: 'text-neutral-900',
              input: [
                'text-neutral-900',
                'placeholder:text-neutral-500',
                'autofill:bg-white',
                'autofill:text-neutral-900',
                'focus:placeholder:text-transparent'
              ].join(' '),
              errorMessage: 'text-red-500'
            }}
          />

          <Input
            {...register('password')}
            label={t('auth.password')}
            variant="bordered"
            isInvalid={!!errors.password}
            errorMessage={errors.password?.message}
            autoComplete="new-password"
            endContent={
              <button 
                type="button" 
                onClick={toggleVisibility}
                className="h-full flex items-center focus:outline-none px-1"
              >
                {isVisible ? (
                  <EyeSlashIcon className="w-5 h-5 text-neutral-400" />
                ) : (
                  <EyeIcon className="w-5 h-5 text-neutral-400" />
                )}
              </button>
            }
            type={isVisible ? "text" : "password"}
            classNames={{
              label: 'text-neutral-900',
              input: [
                'text-neutral-900',
                'placeholder:text-neutral-500',
                'autofill:bg-white',
                'autofill:text-neutral-900',
                'focus:placeholder:text-transparent'
              ].join(' '),
              errorMessage: 'text-red-500'
            }}
          />
        </div>

        <Button
          type="submit"
          color="primary"
          size="lg"
          isLoading={isPending}
          className="w-full bg-black text-white"
        >
          {t('auth.submit.register')}
        </Button>

        <p className="text-center text-sm text-neutral-600">
          {t('auth.haveAccount')}{' '}
          <Link 
            href="/login" 
            className="text-primary hover:underline font-medium"
          >
            {t('auth.signIn')}
          </Link>
        </p>
      </form>
    </div>
  )
} 