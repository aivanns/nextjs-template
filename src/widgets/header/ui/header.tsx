'use client'

import { useUserStore } from "@/entities/user/model/store"
import { Button } from "@heroui/react"
import Link from "next/link"
import { useEffect } from "react"

export function Header() {
  const { user, fetchUser } = useUserStore()

  useEffect(() => {
    fetchUser()
  }, [])

  return (
    <header className="border-b border-neutral-200 bg-background sticky top-0 z-10">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-semibold text-neutral-200">
          Next.js Template
        </Link>

        <div>
          {user ? (
            <div className="flex items-center gap-4">
              <span className="text-neutral-300">{user.email}</span>
              <Button
                color="default"
                onPress={() => {
                  localStorage.removeItem('token')
                  window.location.href = '/login'
                }}
              >
                Выйти
              </Button>
            </div>
          ) : (
            <Link href="/login">
              <Button color="default">
                Войти
              </Button>
            </Link>
          )}
        </div>
      </div>
    </header>
  )
} 