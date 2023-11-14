import { PayloadAction, createSlice } from "@reduxjs/toolkit"

export interface UserState {
    role: UserRole | undefined,
    email: string | undefined,
    profileUrl: string | undefined
}

export enum UserRole {
    client = 'client',
    freelancer = 'freelancer',
    admin = 'admin'
}

const initState: UserState = {
    role: UserRole.freelancer,
    email: undefined,
    profileUrl: undefined
}

export const userState = createSlice({
    name: 'user',
    initialState: initState,
    reducers: {
        changeRole: (state, action: PayloadAction<UserRole>) => {
            state.role = action.payload
        }
    }
})

export const { changeRole } = userState.actions

export default userState.reducer
