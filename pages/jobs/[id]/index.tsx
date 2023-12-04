import { PageLayout } from "@/layout/PageLayout";
import { RootState } from "@/state/store";
import { UserRole } from "@/state/user";
import { Button } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import JobContent from "@/components/page/jobs/[id]";
import useJobApi from "@/api/jobs";
import { JobDetailData } from "@/interface";
import { dataJobExample } from "@/const";
import useUserApi from "@/api/user";

interface Props {
  id: number;
  status: string;
}

export default function JobDetail(props: Props) {
  const router = useRouter();
  const hookJobs = useJobApi();
  const hookUSer = useUserApi();
  const [dataJob, setDataJob] = useState<JobDetailData | undefined | any>();
  const { id } = router.query;
  console.log(id);
  useEffect(() => {
    async function fetchData() {
      const userId = (await hookUSer.getUserInformation()).id;
      const data = await hookJobs.getJobDetail(id as string);
      console.log(data);
      setDataJob(data);
    }
    fetchData();
  }, [id]);
  console.log(dataJob);
  return (
    <PageLayout>
      <div>
        {/* job {router.query.id} */}
        <JobContent dataJob={dataJob} />
      </div>
    </PageLayout>
  );
}

JobDetail.requireLogin = true;
