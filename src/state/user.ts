import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import Cookies from 'js-cookie';
import { AccountModel, Role, Tokens } from 'types/account';

export interface UserState {
    isAuthenticated?: boolean
    accessToken?: string | null
    refreshToken?: string | null
    name: string;
    id?: number;
    email: string;
    role?: Role;
    createdOn?: Date | string

}

const initialState: UserState = {
    isAuthenticated: !!Cookies.get('token'),
    accessToken: Cookies.get('token') ?? null,
    refreshToken: Cookies.get('refreshToken') ?? null,
    name: '',
    email: '',
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state: AccountModel, action: PayloadAction<AccountModel>) => {
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.id = action.payload.id;
            state.createdOn = action.payload.createdOn;
            state.role = action.payload.role;
        },
        logout: (state: UserState) => {
            state.name = '';
            state.email = '';
            state.id = undefined;
            state.createdOn = undefined;
            state.role = undefined;
            state.accessToken = null;
            state.refreshToken = null;
            state.isAuthenticated = false;
            Cookies.remove('token');
            Cookies.remove('refreshToken');
        },
        setTokens: (state, action: PayloadAction<Tokens>) => {
            state.accessToken = action.payload.accessToken;
            state.refreshToken = action.payload.refreshToken;
            state.isAuthenticated = true;
        },
    },
})

export const {  logout, setTokens, setUser } = userSlice.actions

export default userSlice.reducer