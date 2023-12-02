import { Category } from "@/model/category"
import { axiosInstance } from "@/ultils/axiosInstance"
import { AxiosResponse } from "axios"
import { useSession } from "next-auth/react"

export default function useAdminSettingsApi() {
    // const { data } = useSession()
    async function getAll(url: string, type: string) {
        const response = await axiosInstance.get(url)
        return response.data[type]
        // return response
    }

    async function create(url: string, value: any) {
        await axiosInstance.post(url, value)
    }

    return {
        getAll,
        create,
    }
}