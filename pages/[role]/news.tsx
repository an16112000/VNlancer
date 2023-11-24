import { useJobApi } from "@/api/get-all-jobs";
import NewJobs, { Job } from "@/components/page/news/NewJobs";
import { PageLayout } from "@/layout/PageLayout";
import { Box } from "@mui/material";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";


function NewsPage() {
    const router = useRouter()
    const role = router.query.role
    const [data, setData] = useState<Job[]>([
        {
            id: 1,
            name: 'web developer',
            budget: 21000,
            information: 'create a web',
            categoryName: "Fe",
            typeOfEmployee: 'full time',
            jobLevel: 'fresher',
            postDate: '17/11',
            owner: {
                id: 1,
                ownerName: 'phucnq',
                avatar: 'zxcv'
            }
        },
        {
            id: 2,
            name: 'web developer',
            budget: 21000,
            information: 'create a web',
            categoryName: "Fe",
            typeOfEmployee: 'full time',
            jobLevel: 'fresher',
            postDate: '17/11',
            owner: {
                id: 1,
                ownerName: 'phucnq',
                avatar: 'zxcv'
            }
        },
        {
            id: 3,
            name: 'web developer',
            budget: 21000,
            information: 'create a web',
            categoryName: "Fe",
            typeOfEmployee: 'full time',
            jobLevel: 'fresher',
            postDate: '17/11',
            owner: {
                id: 1,
                ownerName: 'phucnq',
                avatar: 'zxcv'
            }
        }
    ])
    const { getAllJob } = useJobApi()
    useEffect(
        () => {
            // async function fetchJobApi() {
            //     const res = await getAllJob()
            //     setData(res?.data.jobs)
            // }
            // fetchJobApi()
        }, []
    )
    return (
        <PageLayout>
            {
                role === 'freelancer' ?
                    <Box sx={{ width: '100%' }}>
                        <NewJobs list={data} />
                    </Box> :
                    <></>
            }
        </PageLayout>
    )
}

NewsPage.requireLogin = true

export default NewsPage