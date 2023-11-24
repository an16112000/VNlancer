import useJobApi from "@/api/jobs"
import JobDetail from "@/components/page/jobs/JobDetail"
import ListApplicant from "@/components/page/jobs/ListApplicant"
import ListEvent from "@/components/page/jobs/ListEvent"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

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
    }, [])
    return (
        <>
            {/* <JobDetail></JobDetail>
            {jobStatus == 'open' ? <ListApplicant></ListApplicant> : <ListEvent></ListEvent>} */}
        </>
    )
}