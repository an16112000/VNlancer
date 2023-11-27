import { useJobApi } from "@/api/get-all-jobs";
import NewFreelancer from "@/components/page/news/NewFreelancer";
import NewJobs, { Job } from "@/components/page/news/NewJobs";
import FilterBar from "@/features/all-services/filter-bar";
import { PageLayout } from "@/layout/PageLayout";
import { Box, Stack } from "@mui/material";
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
                    <Stack sx={{ width: '100%', position: 'relative' }} flexDirection={'row'} justifyContent={'space-between'}>
                        <NewJobs list={data} />
                        <FilterBar />
                    </Stack> :
                    <Stack sx={{ width: '100%', position: 'relative' }} flexDirection={'row'} justifyContent={'space-between'}>
                    <NewFreelancer />
                </Stack>
            }
        </PageLayout>
    )
}

NewsPage.requireLogin = true

export default NewsPage