import { axiosInstance } from "@/ultils/axiosInstance"
import axios from "axios"
import { useSession } from "next-auth/react"

interface UserApi {
    getUserProfile: Function
}

export interface UserProfile {
    address: string
    phoneNumber: string
    email: string
    username: string
    imageUrl: string
}

export default function useUserApi()  {
    const {data: session} = useSession()
    async function getUserInformation() {
        const response = await axiosInstance.get('/users/information/detail', {
            headers: {
                Authorization: `Bearer ${session?.accessToken}`
            }
        })
        const data = response.data
        return data
    }

    return {
        getUserInformation
    }
}