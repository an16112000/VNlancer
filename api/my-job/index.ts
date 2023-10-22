import { axiosInstance } from "@/utils/axios/instance"
import { useSession } from "next-auth/react"

export default function useMyJobApi() {
    const { data, status } = useSession()
    const getMyJob = async () => {
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
        getMyJob,
        searchJob
    }
}