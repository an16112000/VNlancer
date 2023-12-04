import { Application, Category } from "@/interface"
import { axiosInstance } from "@/ultils/axiosInstance"
import { AxiosRequestConfig, AxiosResponse } from "axios"
import { useSession } from "next-auth/react"

export default function useApplicationApi() {
    const { data: session } = useSession()
    async function createApllication(data: Application) {
        console.log(session?.accessToken)
        await axiosInstance.post("/applications", data, {
            headers: {
                Authorization: `Bearer ${session?.accessToken}`
            },
        })
    }

    async function getAllApplicationFreelancer(id: number) {
        const response = await axiosInstance.get(`/applications`,
            {
                params: {
                    userId: id
                },
                headers: {
                    Authorization: `Bearer ${session?.accessToken}`
                }
            })
        const data = response.data
        console.log(data)
        return data
    }

    async function getAllJobApplication(jobId: number) {
        const response = await axiosInstance.get('/applications', {
            params: {
                jobId: jobId
            },
            headers: {
                Authorization: `Bearer ${session?.accessToken}`
            }
        })
        const data = response.data
        return data
    }

    return {
        createApllication,
        getAllApplicationFreelancer,
        getAllJobApplication
    }
}