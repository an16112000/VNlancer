import useJobApi from "@/api/jobs";
import NewFreelancer from "@/components/page/news/NewFreelancer";
import NewJobs from "@/components/page/news/NewJobs";
import { listDataJobExample } from "@/const";
import FilterBar from "@/features/all-services/filter-bar";
import { JobDetailData } from "@/interface";
import { PageLayout } from "@/layout/PageLayout";
import { Stack } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";


function NewsPage() {
    const router = useRouter()
    const role = router.query.role
    const [data, setData] = useState<JobDetailData[]>([]);
    const { getAllJob } = useJobApi();
    useEffect(
        () => {
            async function fetchJobApi() {
              const dataJobs = await getAllJob();
              setData(dataJobs)
            }
            fetchJobApi()
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

NewsPage.requireLogin = false

export default NewsPage