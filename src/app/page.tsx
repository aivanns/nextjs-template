'use client'

import { Header } from "@/widgets/header/ui/header"

export default function Home() {

  return (
    <div className="min-h-screen bg-background text-neutral-900">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto space-y-12">
          <section className="text-center">
            <h2 className="text-3xl font-bold mb-6 text-neutral-200">
              Добро пожаловать!
            </h2>
            <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
              Это базовый шаблон Next.js с настроенными стилями и компонентами для быстрого старта разработки.
            </p>
          </section>

          <section className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-8 rounded-xl bg-accent-rose shadow-lg border border-neutral-200 transition-transform hover:scale-[1.02]">
              <h3 className="font-semibold text-lg mb-3">Tailwind CSS</h3>
              <p className="text-neutral-600">Утилитарный CSS-фреймворк для быстрой стилизации</p>
            </div>
            <div className="p-8 rounded-xl bg-accent-green shadow-lg border border-neutral-200 transition-transform hover:scale-[1.02]">
              <h3 className="font-semibold text-lg mb-3">HeroUI</h3>
              <p className="text-neutral-600">Библиотека готовых компонентов для React</p>
            </div>
          </section>

          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-8 rounded-xl bg-accent-blue shadow-lg border border-neutral-200 transition-transform hover:scale-[1.02]">
              <h3 className="font-semibold text-lg mb-3">React Query</h3>
              <p className="text-neutral-600">Управление серверным состоянием</p>
            </div>
            <div className="p-8 rounded-xl bg-accent-green shadow-lg border border-neutral-200 transition-transform hover:scale-[1.02]">
              <h3 className="font-semibold text-lg mb-3">Zustand</h3>
              <p className="text-neutral-600">Управление локальным состоянием</p>
            </div>
            <div className="p-8 rounded-xl bg-accent-yellow shadow-lg border border-neutral-200 transition-transform hover:scale-[1.02]">
              <h3 className="font-semibold text-lg mb-3">React Hook Form</h3>
              <p className="text-neutral-600">Работа с формами и валидация</p>
            </div>
            <div className="p-8 rounded-xl bg-accent-rose shadow-lg border border-neutral-200 transition-transform hover:scale-[1.02]">
              <h3 className="font-semibold text-lg mb-3">i18next</h3>
              <p className="text-neutral-600">Мультиязычность</p>
            </div>
            <div className="p-8 rounded-xl bg-accent-blue shadow-lg border border-neutral-200 transition-transform hover:scale-[1.02]">
              <h3 className="font-semibold text-lg mb-3">Axios</h3>
              <p className="text-neutral-600">HTTP-клиент для работы с API</p>
            </div>
            <div className="p-8 rounded-xl bg-accent-green shadow-lg border border-neutral-200 transition-transform hover:scale-[1.02]">
              <h3 className="font-semibold text-lg mb-3">Framer Motion</h3>
              <p className="text-neutral-600">Анимации и переходы</p>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}
