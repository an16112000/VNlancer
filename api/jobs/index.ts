import { JobDetailData } from "@/interface"
import { axiosInstance } from "@/ultils/axiosInstance"
import { AxiosResponse } from "axios"
import { useSession } from "next-auth/react"

export default function useJobApi() {
    const { data: session } = useSession()
    async function createJob(requestBody: CreateJobRequestBody): Promise<CreateJobResponseBody> {
        const response = await axiosInstance.post("jobs", requestBody, {
            headers: {
                Authorization: `Bearer ${session?.accessToken}`
            }
        })
        const data = response.data
        console.log(data)
        return data
    }

    async function getAllJob() {
        const response = await axiosInstance.get("/jobs")
        console.log(response)
        const data = response.data.jobs
        return data;
    }

    async function getJobDetail(jobId: string) {
        console.log(jobId)
        const response = await axiosInstance.get(`/jobs/${jobId}`)
        const data = response.data
        console.log(data)
        return data
    }

    async function uploadImage(jobId: number, data: any) {
        await axiosInstance.post(`/jobs/${jobId}/upload-image`, data)
    }


    return {
        createJob,
        getAllJob,
        getJobDetail,
        uploadImage
    }
}

export interface CreateJobRequestBody {
    name: string,
    budget: number,
    information: string,
    categoryId: number,
    workingTypeId: number,
    levelId: number
}

export interface CreateJobResponseBody {
    id: number,
    name: string,
    budget: number,
    information: string,
    categoryName: string,
    typeOfEmployee: string,
    jobLevel: string,
    postDate: string,
    owner: {
        id: number,
        ownerName: string,
        avatar: string
    }
}

export interface Job {

}

export interface JobDetail { }