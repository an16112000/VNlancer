import { axiosInstance } from "@/ultils/axiosInstance";
import axios from "axios";
import { useSession } from "next-auth/react";

export default function GetAllJobs() {
    const {data } = useSession()
    console.log(data)
    // const response = axiosInstance.post('/my-jobs')
}