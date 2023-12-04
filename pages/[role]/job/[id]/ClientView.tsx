import useJobApi from "@/api/jobs"
import JobDetail from "@/components/page/jobs/JobDetail"
import ListApplicant from "@/components/page/jobs/ListApplicant"
import ListEvent from "@/components/page/jobs/ListEvent"
import { JobDetailData } from "@/interface"
import { Stack } from "@mui/material"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"


export default function ClientView() {
    const { getJobDetail } = useJobApi()
    const [dataJob, setDataJob] = useState<JobDetailData | any>()
    const [jobStatus, setJobStatus] = useState()
    const router = useRouter()
    useEffect(() => {
        (async () => {
            try {
                const result = await getJobDetail(Number(router.query.id))
                console.log(result);
                setDataJob(result);
            } catch (exception) {
                console.log(exception);

            }
        })()
    }, [getJobDetail, router.query.id])
    return (
      <Stack gap="10px">
        <JobDetail jobDetail={dataJob}></JobDetail>
        <ListApplicant />
        {/* {jobStatus == 'open' ? <ListApplicant></ListApplicant> : <ListEvent listEvent={[]}></ListEvent>} */}
      </Stack>
    );
}