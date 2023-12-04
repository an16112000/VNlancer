import ListApplicant from "@/components/page/jobs/ListApplicant"
import ListEvent, { EventData } from "@/components/page/jobs/ListEvent"
import { useRouter } from "next/router"
import { useState, useEffect } from "react"
import useJobApi from "@/api/jobs"
import JobDetail from "@/components/page/jobs/JobDetail"
import { Stack } from "@mui/material"
import { dataJobExample } from "@/const"
import { JobDetailData } from "@/interface"
import { JobStatus } from "@/components/page/dashboard/JobStatusLabel"

const listEvent: EventData[] = [
    {
        id: 1,
        user: {
            id: 1,
            avatar: '',
            email: 'phucnq'
        },
        content: 'hello',
        createAt: '24/11/2023',
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

interface FreelancerViewProps {
  jobDetail: {
    id: number;
    name: string;
    budget: number;
    information: string;
    category: {
      id: number;
      name: string;
    };
    owner: {
      email: string,
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
  };
}

export default function FreelancerView({ jobDetail }: FreelancerViewProps) {
  const { getJobDetail } = useJobApi();
  const [jobStatus, setJobStatus] = useState();
  const router = useRouter();
  useEffect(() => {
    (async () => {
      try {
        const result = await getJobDetail(router.query.id as string);
        console.log(result);
      } catch (exception) {
        console.log(exception);
      }
    })();
  }, [router.query.id]);
  return (
    <Stack gap="10px">
      <JobDetail jobDetail={dataJobExample}></JobDetail>
      {/* <ListEvent listEvent={listEvent}></ListEvent> */}
    </Stack>
  );
}

FreelancerView.requireLogin = true