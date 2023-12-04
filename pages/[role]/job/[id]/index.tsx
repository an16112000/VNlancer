import { PageLayout } from "@/layout/PageLayout";
import { useRouter } from "next/router";
import FreelancerView from "./FreelancerView";
import ClientView from "./ClientView";
import useJobApi from "@/api/jobs";
import { useEffect, useState } from "react";
import { JobStatus } from "@/components/page/dashboard/JobStatusLabel";

interface JobDetailProps {

    id: number;
    name: string;
    budget: number;
    information: string;
    category: {
      id: number;
      name: string;
    };
    owner: {
      email: string;
      fullName: string;
      id: number;
    };
    workingType: {
      id: number;
      name: string;
    };
    imageUrl: string;
    level: {
      id: number;
      name: string;
    };
    createAt: any;
    status: JobStatus;
}

function JobDetail() {
  const { asPath } = useRouter();
  const router = useRouter();
  const { getJobDetail } = useJobApi();
  const [jobDetail, setJobDetail] = useState<JobDetailProps>({
    id: 1,
    name: "33333",
    budget: 3333.0,
    information: "33333",
    category: {
      id: 1,
      name: "FE",
    },
    owner: {
      email: '',
      fullName: '',
      id: 1,
    },
    workingType: {
      id: 1,
      name: "PT",
    },
    imageUrl: '',
    level: {
      id: 1,
      name: "Intern",
    },
    createAt: null,
    status: JobStatus.open,
  });
  const jobId = router.query.id;
  useEffect(() => {
    async function fetchData() {
      const data = await getJobDetail(jobId as string);
      setJobDetail(data)
    }
    fetchData()
  }, []);
  console.log(jobDetail)
  return (
    <PageLayout>
      {asPath.includes("freelancer") ? (
        <FreelancerView jobDetail={jobDetail} />
      ) : (
        <ClientView jobDetail={jobDetail} />
      )}
    </PageLayout>
  );
}

JobDetail.requireLogin = true;

export default JobDetail;
