'use client'

import { useTranslation } from 'react-i18next'
import { useRegister } from '../model/use-auth'
import { DynamicFormFields, type FormField } from '@/shared/ui/dynamic-form'
import Link from 'next/link'
import { registerSchema, type RegisterFormData } from '../model/auth'

export function RegisterForm() {
  const { t } = useTranslation()
  const { mutate: registerUser, isPending } = useRegister()

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
      autoComplete: 'new-password',
      endContent: true
    }
  ]

  const onSubmit = (data: RegisterFormData) => {
    registerUser(data)
  }

  return (
    <div className="w-full max-w-sm p-8 bg-white rounded-xl shadow-lg border border-neutral-200">
      <DynamicFormFields 
        fields={fields}
        schema={registerSchema}
        onSubmit={onSubmit}
        className="flex flex-col gap-6"
        submitButton={{
          text: t('auth.submit.register'),
          isLoading: isPending
        }}
      >
        <div className="text-center">
          <h1 className="text-2xl font-bold text-neutral-900">
            {t('auth.register')}
          </h1>
          <p className="mt-2 text-neutral-600">
            Создайте свой аккаунт
          </p>
        </div>
      </DynamicFormFields>

      <p className="text-center text-sm text-neutral-600 mt-6">
        {t('auth.haveAccount')}{' '}
        <Link 
          href="/login" 
          className="text-primary hover:underline font-medium"
        >
          {t('auth.signIn')}
        </Link>
      </p>
    </div>
  )
} 