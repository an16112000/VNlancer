import { axiosInstance } from "@/ultils/axiosInstance"
import { AxiosResponse } from "axios"
import { useSession } from "next-auth/react"

export default function useJobApi() {
    const { data } = useSession()
    async function createJob(requestBody: CreateJobRequestBody): Promise<AxiosResponse<CreateJobResponseBody>> {
        return await axiosInstance.post("jobs", requestBody, {
            headers: {
                Authorization: `Bearer ${data?.accessToken}`
            }
        })
    }

    async function getAllJob(): Promise<AxiosResponse<Job[]>> {
        return await axiosInstance.get("/jobs", {
            headers: {
                Authorization: `Bearer ${data?.accessToken}`
            }
        })
    }
    async function getJobDetail(jobId: number): Promise<AxiosResponse<JobDetail>> {
        return await axiosInstance.get(`/jobs/${jobId}`, {
            headers: {
                Authorization: `Bearer ${data?.accessToken}`
            }
        })
    }


    return {
        createJob,
        getAllJob,
        getJobDetail
    }
}

export interface CreateJobRequestBody {
    name: string,
    budget: number,
    information: string,
    categoryId: number,
    typeOfEmployee: string,
    jobLevel: string
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