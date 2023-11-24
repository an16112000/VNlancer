import { axiosInstance, setHeader } from "@/ultils/axiosInstance";
import { useSession } from "next-auth/react";

export function useJobApi() {
    const { status, data } = useSession()
    const getAllJob = async () => {
        if (status === "authenticated") {
            return await axiosInstance.get("http://localhost:9000/jobs/all?role=3")
        }
    }
    const createJob = async (jobData: any) => {
        if (status === 'authenticated') {
            return await axiosInstance.post('/jobs',
                jobData, {
                headers: {
                    Authorization: `Bearer ${data?.accessToken}`
                }
            }
            )
        }
    }
    return {
        getAllJob,
        createJob
    }
}