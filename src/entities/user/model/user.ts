export interface User {
  id: string
  email: string
}

export interface User {
    id: string
    email: string
    isActive: boolean
    role: {
      id: string
      name: string
    }
    roleId: string
}
