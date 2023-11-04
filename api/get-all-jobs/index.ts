import { axiosInstance } from "@/ultils/axiosInstance";
import { useSession } from "next-auth/react";

export function useJobApi() {
    const { status } = useSession()
    const getAllJob = async () => {
        if (status === "authenticated") {
            return await axiosInstance.get("http://localhost:9000/jobs/all")
        }
    }
    const createJob = async (data: any) => {
        if(status === 'authenticated') {
            return await axiosInstance.post('http://localhost:9000/jobs',
            data
            )
        }
    }
    return {
        getAllJob,
        createJob 
    }
}