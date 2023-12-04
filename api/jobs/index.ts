import { JobDetailData } from "@/interface"
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

    async function getAllJob() {
        const response = await axiosInstance.get("/jobs")
        console.log(response)
        const data = response.data.jobs
        return data;
    }
    async function getJobDetail(jobId: any): Promise<AxiosResponse<JobDetailData | undefined>> {
        const response = await axiosInstance.get(`/jobs/${jobId}`)
        const data = response.data
        console.log(data)
        return data
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