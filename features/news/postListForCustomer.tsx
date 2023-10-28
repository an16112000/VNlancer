import { Box } from "@mui/material";
import PostForFreelancer from "./postForFreeLancer";
import { useJobApi } from "@/api/get-all-jobs";
import { useEffect, useState } from "react";

const FreelancerList = [
    {
        type: 'Kinh doanh',
        title: 'Pho',
        avatar: 'https://variety.com/wp-content/uploads/2021/04/Avatar.jpg',
        nameUser: "Mic Doan",
        date: '20/09/2023 1:38',
        price: 1000000,
        details: '1 shot 1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot11 shot 1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot11 shot 1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot11 shot 1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot11 shot 1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot11 shot 1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot11 shot 1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot11 shot 1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot11 shot 1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot'
    },
    {
        type: 'Kinh doanh',
        title: 'Pho',
        avatar: 'https://variety.com/wp-content/uploads/2021/04/Avatar.jpg',
        nameUser: "Mic Doan",
        date: '20/09/2023 1:38',
        price: 1000000,
        details: '1 shot'
    },
    {
        type: 'Kinh doanh',
        title: 'Pho',
        avatar: 'https://variety.com/wp-content/uploads/2021/04/Avatar.jpg',
        nameUser: "Mic Doan",
        date: '20/09/2023 1:38',
        price: 1000000,
        details: '1 shot'
    },
]

export function PostListForCustomer() {
    const [data, setData] = useState()
    const response = useJobApi()
    useEffect(
        () => {
            async function fetchJobApi() {
                const res = await response.getAllJob()
                setData(res?.data.jobs)
            }
            fetchJobApi()
        }, []
    )    
    console.log(data)
    return (
        <Box sx={{ width: '100%' }}>
            <PostForFreelancer list={data} />
        </Box>
    );
}

