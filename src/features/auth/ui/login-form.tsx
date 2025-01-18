'use client'

import { useTranslation } from 'react-i18next'
import { useLogin } from '../model/use-auth'
import { DynamicFormFields, type FormField } from '@/shared/ui/dynamic-form'
import Link from 'next/link'
import { loginSchema, type LoginFormData } from '../model/auth'

export function LoginForm() {
  const { t } = useTranslation()
  const { mutate: login, isPending } = useLogin()

  const fields: FormField[] = [
    {
      name: 'email',
      type: 'email',
      label: t('auth.email'),
      required: true,
      autoComplete: 'email'
    },
    {
      name: 'password',
      type: 'password',
      label: t('auth.password'),
      required: true,
      autoComplete: 'current-password',
      endContent: true
    }
  ]

  const onSubmit = (data: LoginFormData) => {
    login(data)
  }

  return (
    <div className="w-full max-w-sm p-8 bg-white rounded-xl shadow-lg border border-neutral-200">
      <DynamicFormFields 
        fields={fields}
        schema={loginSchema}
        onSubmit={onSubmit}
        className="flex flex-col gap-6"
        submitButton={{
          text: t('auth.submit.login'),
          isLoading: isPending
        }}
      >
        <div className="text-center">
          <h1 className="text-2xl font-bold text-neutral-900">
            {t('auth.login')}
          </h1>
          <p className="mt-2 text-neutral-600">
            Войдите в свой аккаунт
          </p>
        </div>
      </DynamicFormFields>

      <p className="text-center text-sm text-neutral-600 mt-6">
        {t('auth.noAccount')}{' '}
        <Link 
          href="/register" 
          className="text-primary hover:underline font-medium"
        >
          {t('auth.createAccount')}
        </Link>
      </p>
    </div>
  )
}
