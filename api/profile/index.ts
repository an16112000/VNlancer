import { axiosInstance } from "@/ultils/axiosInstance"
import axios from "axios"

interface createProfileData {
    aboutMe: string,
    levelId: number,
    workExperience: string,
    categoryId: number,
    workingTypeId: number,
    skill: string
}

export default function useProfileAPI() {
    async function getAll() {
        const response = await axiosInstance.get('/profile')
        console.log(response)
        const data = response.data.profiles
        return data
    }
    async function createProfile(data: createProfileData) {
        const response = await axiosInstance.post('/profile', data)
    }

    return {
        createProfile,
        getAll
    }
}