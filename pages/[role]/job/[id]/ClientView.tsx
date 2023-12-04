import useJobApi from "@/api/jobs";
import JobDetail from "@/components/page/jobs/JobDetail";
import ListApplicant from "@/components/page/jobs/ListApplicant";
import ListEvent from "@/components/page/jobs/ListEvent";
import { JobDetailData } from "@/interface";
import { Stack } from "@mui/material";
import { query } from "firebase/firestore";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function ClientView() {
  const { getJobDetail } = useJobApi();
  const [dataJob, setDataJob] = useState<JobDetailData[] | any>([]);
  const [jobStatus, setJobStatus] = useState();
  const router = useRouter();

  // async function fetchData() {
  //   const result = await getJobDetail(1);
  //   console.log(result);
  //   setDataJob(result);
  // }

  //   console.log(dataJob)
  // fetchData();

  useEffect(
    () => {
      async function fetchData() {
        const data = await getJobDetail(router.query.id as string)
        // console.log(data)
        setDataJob(data)
      }
      fetchData()
    }, []
  )

  console.log(dataJob)
  //   useEffect(() => {
  //     (async () => {
  //         await fetchData();
  //       try {
  //       } catch (exception) {
  //         console.log(exception);
  //       }
  //     })();
  //   }, [router.query.id]);
  return (
    <Stack gap="10px">
      <JobDetail jobDetail={dataJob}></JobDetail>
      {/* <ListApplicant /> */}
      {/* {jobStatus == 'open' ? <ListApplicant></ListApplicant> : <ListEvent listEvent={[]}></ListEvent>} */}
    </Stack>
  );
}
