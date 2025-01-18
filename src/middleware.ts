import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const publicPaths = ['/login', '/register']
  
  if (!publicPaths.includes(request.nextUrl.pathname)) {
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('token')
      
      if (!token) {
        return NextResponse.redirect(new URL('/login', request.url))
      }
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
} 