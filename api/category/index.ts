import { axiosInstance } from "@/ultils/axiosInstance"
import { useSession } from "next-auth/react"

export default function useMyJobApi() {
    const { data, status } = useSession()
    const getAllCategory = async () => {
        if (status === "authenticated") {
            return await axiosInstance.get("http://localhost:9000/my-jobs", {
                headers: {
                    Authorization: `Bearer ${data?.accessToken}`
                }
            })
        }
    }
    const searchJob = async () => {

    }
    return {
        getAllCategory,
        searchJob
    }
}