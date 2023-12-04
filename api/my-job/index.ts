import { axiosInstance } from "@/ultils/axiosInstance"
import { useSession } from "next-auth/react"

export default function useMyJobApi() {
    const { data, status } = useSession()
    const getMyJob = async (userId: number) => {
        if (status === "authenticated") {
            const respose = await axiosInstance.get(`/jobs`, {
                params: {
                    userId: userId
                }
            })
            const data = respose.data.jobs
            return data
        }
    }
    const searchJob = async () => {

    }
    return {
        getMyJob,
        searchJob
    }
}