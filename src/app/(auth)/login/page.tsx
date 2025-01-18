'use client'

import { LoginForm } from '@/features/auth/ui/login-form'

export default function LoginPage() {
  return (
    <main className="min-h-screen grid place-items-center bg-white">
      <LoginForm />
    </main>
  )
}