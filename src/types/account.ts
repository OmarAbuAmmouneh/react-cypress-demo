export type Role = "Admin" | "Member" | "Viewer"

export const RolesSelection = [
    {
        label: "Admin",
        value: "0",
    },
    {
        label: "Viewer",
        value: "10",
    },
    {
        label: "Member",
        value: "20",
    },
]


export interface AccountModel {
    name: string
    email: string
    createdOn?: string | Date
    id?: number
    role?: Role
}

export interface UpdateAccountModel {
    name: string
    id: number
    role: number
}

export interface CreateAccountModel {
    name: string
    email: string
    password: string
    role: number
}

export interface Tokens {
    accessToken: string;
    refreshToken: string;
}

export interface SignInResponse {
    jwt: string;
    refreshToken: string;
}

export interface LoginRequest {
    email: string;
    password: string;
}