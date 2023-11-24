import ListApplicant from "@/components/page/jobs/ListApplicant"
import ListEvent, { EventData } from "@/components/page/jobs/ListEvent"
import { useRouter } from "next/router"
import { useState, useEffect } from "react"
import useJobApi from "@/api/jobs"
import JobDetail, { JobDetailData } from "@/components/page/jobs/JobDetail"
import { Stack } from "@mui/material"

const listEvent: EventData[] = [
    {
        id: 1,
        user: {
            id: 1,
            avatar: '',
            email: 'phucnq'
        },
        content: 'hello',
        createAt: '24/11/2023'
    },
    {
        id: 1,
        user: {
            id: 1,
            avatar: '',
            email: 'phucnq'
        },
        content: 'hel sdf sdfa sdf sdf sdfs sdfsd sdfsd sd  lo hel sdf sdfa sdf sdf sdfs sdfsd sdfsd sd  lo hel sdf sdfa sdf sdf sdfs sdfsd sdfsd sd  lo hel sdf sdfa sdf sdf sdfs sdfsd sdfsd sd  lo hel sdf sdfa sdf sdf sdfs sdfsd sdfsd sd  lo ',
        createAt: '24/11/2023'
    },
    {
        id: 1,
        user: {
            id: 1,
            avatar: '',
            email: 'phucnq'
        },
        content: 'hel sdf sdfa sdf sdf sdfs sdfsd sdfsd sd  lo',
        createAt: '24/11/2023'
    },
    {
        id: 1,
        user: {
            id: 1,
            avatar: '',
            email: 'phucnq'
        },
        content: 'helsdf asdfasdf sdfasdf asdfasdfas asdfasdf lo',
        createAt: '24/11/2023'
    }
]

const jobDetailData: JobDetailData = {
    id: 1,
    name: 'web',
    budget: 21000,
    information: 'create FE web',
    categoryName: 'FE',
    typeOfEmployee: 'full time',
    jobLevel: 'fresher',
    postDate: '17/11',
    dueDate: '20/11',
    status: 'open',
    client: {
        name: 'An Doan',
    }
}

export default function FreelancerView() {
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
    }, [])
    return (
        <Stack gap='10px'>
            <JobDetail jobDetail={jobDetailData}></JobDetail>
            <ListEvent listEvent={listEvent}></ListEvent>
        </Stack>
    )
}