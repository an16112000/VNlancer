import { axiosInstance } from "@/ultils/axiosInstance";
import { useSession } from "next-auth/react";

export interface CreateReviewBody {
    userId?: number,
    content?: string,
    rate?: number
}

export function useReviewApi() {
    const { data } = useSession();
    async function createReView(body: CreateReviewBody) {
        await axiosInstance.post("/reviews", body, {
            headers: {
                Authorization: `Bearer ${data?.accessToken}`
            }
        })
    }
    return {
        createReView
    }
}