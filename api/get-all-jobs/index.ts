import { axiosInstance } from "@/ultils/axiosInstance";
import { useSession } from "next-auth/react";

export function useJobApi() {
    const { status } = useSession()
    const getAllJob = async () => {
        if (status === "authenticated") {
            return await axiosInstance.get("http://localhost:9000/jobs/all")
        }
    }
    return {
        getAllJob 
    }
}