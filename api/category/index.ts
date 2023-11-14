import { Category } from "@/model/category"
import { axiosInstance } from "@/ultils/axiosInstance"
import { AxiosResponse } from "axios"
import { useSession } from "next-auth/react"

export default function useCategoryApi() {
    const { data } = useSession()
    async function getAllCategory(): Promise<AxiosResponse<{ categories: Category[] }>> {
        return await axiosInstance.get("http://localhost:9000/categories/all", {
            headers: {
                Authorization: `Bearer ${data?.accessToken}`
            }
        })
    }

    return {
        getAllCategory,
    }
}