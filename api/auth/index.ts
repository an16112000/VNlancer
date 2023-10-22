import { axiosInstance } from "@/ultils/axiosInstance";

interface AuthenticateRequestBody {
    tokenId?: string,
    username?: string
}

export interface AuthenticateResponseBody {
    accessToken: string
}
export async function authenticate(requestBody: AuthenticateRequestBody) {
    return await axiosInstance.post("/auth", requestBody);
}

