import useJobApi from "@/api/jobs"
import JobDetail, { JobDetailData } from "@/components/page/jobs/JobDetail"
import ListApplicant from "@/components/page/jobs/ListApplicant"
import ListEvent from "@/components/page/jobs/ListEvent"
import { Stack } from "@mui/material"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

const jobDetailData: JobDetailData = {
    id: 1,
    name: 'web',
    budget: 21000,
    information: 'create FE web',
    categoryName: ['FE'],
    typeOfEmployee: 'full time',
    jobLevel: 'fresher',
    postDate: '17/11',
    dueDate: '20/11',
    status: 'open',
    client: {
        name: 'An Doan',
    }
}

export default function ClientView() {
    const { getJobDetail } = useJobApi()
    const [jobStatus, setJobStatus] = useState()
    const router = useRouter()
    useEffect(() => {
        (async () => {
            try {
                const result = await getJobDetail(Number(router.query.id))
                console.log(result);
            } catch (exception) {
                console.log(exception);

            }
        })()
    }, [getJobDetail, router.query.id])
    return (
        <Stack gap='10px'>
            <JobDetail jobDetail={jobDetailData}></JobDetail>
            {jobStatus == 'open' ? <ListApplicant></ListApplicant> : <ListEvent listEvent={[]}></ListEvent>}
        </Stack>
    )
}