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
    async function getAll(idUser: number) {
        const response = await axiosInstance.get('/profile', {
            params: {
                userId: idUser
            }
        })
        console.log(response)
        const data = response.data.profiles
        return data
    }
    async function createProfile(data: createProfileData) {
        await axiosInstance.post('/profile', data, {
            headers: {
                Authorization: `Bearer ${session?.accessToken}`
            }
        })
    }

    async function createIntroduction(data: any) {
        await axiosInstance.put('/users', data, {
            headers: {
                Authorization: `Bearer ${session?.accessToken}`,
            }
        })
    }

    async function getIntroduction() {
        const response = await axiosInstance.get('/users/information/detail', {
            headers: {
                Authorization: `Bearer ${session?.accessToken}`,
            }
        })
        const data = response.data
        return data
    }

    async function updateProfessional(data: any) {
        await axiosInstance.put('/profile', data)
    }

    return {
        createProfile,
        getAll,
        createIntroduction,
        getIntroduction,
        updateProfessional
    }
}