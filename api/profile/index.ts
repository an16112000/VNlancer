import { axiosInstance } from "@/ultils/axiosInstance"
import axios from "axios"
import { useSession } from "next-auth/react"

interface createProfileData {
    aboutMe?: string,
    levelId?: number,
    workExperience?: string,
    categoryId?: number,
    workingTypeId?: number,
    skill?: string
}

interface introductionData {
    address?: string,
    gender?: string,
    dateOfBirth?: string,
    fullName?: string,
    phoneNumber?: string,
    password?: string
}

export default function useProfileAPI() {
    const { data: session } = useSession()
    async function getAll() {
        const response = await axiosInstance.get('/profile')
        console.log(response)
        const data = response.data.profiles
        return data
    }
    async function createProfile(data: FormData) {
        await axiosInstance.post('/profile', data)
    }

    async function createIntroduction(data: any) {
        await axiosInstance.put('/users', data, {
            headers: {
                Authorization: `Bearer ${session?.accessToken}`,
                "Content-Type": "multipart/form-data"
            }
        })
    }

    return {
        createProfile,
        getAll,
        createIntroduction
    }
}