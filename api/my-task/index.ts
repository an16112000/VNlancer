import { axiosInstance, setHeader } from "@/ultils/axiosInstance";
import { useSession } from "next-auth/react";

export default function useMyTaskApi() {
    const { status, data: session } = useSession()
    const getAllMyTask = async () => {
        if (status === "authenticated") {
            const response = await axiosInstance.get("/my-task", {
                headers: {
                    Authorization: `Bearer ${session.accessToken}`
                }
            })
            const data = response.data.tasks
            return data
        }
    }

    async function updateTask(taskId: number, status: string) {
        console.log(taskId, status)
        await axiosInstance.put(`/my-task/${taskId}`, {
            status: status
        })
    }
    
    return {
        getAllMyTask,
        updateTask
    }
}