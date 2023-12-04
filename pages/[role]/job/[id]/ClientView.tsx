import useJobApi from "@/api/jobs";
import { JobStatus } from "@/components/page/dashboard/JobStatusLabel";
import JobDetail from "@/components/page/jobs/JobDetail";
import ListApplicant from "@/components/page/jobs/ListApplicant";
import ListEvent, { EventData } from "@/components/page/jobs/ListEvent";
import { JobDetailData } from "@/interface";
import { Stack } from "@mui/material";
import { query } from "firebase/firestore";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const listEvent: EventData[] = [
  {
    id: 1,
    user: {
      id: 1,
      avatar: "",
      email: "phucnq",
    },
    content: "hello",
    createAt: "24/11/2023",
  },
  {
    id: 1,
    user: {
      id: 1,
      avatar: "",
      email: "phucnq",
    },
    content:
      "hel sdf sdfa sdf sdf sdfs sdfsd sdfsd sd  lo hel sdf sdfa sdf sdf sdfs sdfsd sdfsd sd  lo hel sdf sdfa sdf sdf sdfs sdfsd sdfsd sd  lo hel sdf sdfa sdf sdf sdfs sdfsd sdfsd sd  lo hel sdf sdfa sdf sdf sdfs sdfsd sdfsd sd  lo ",
    createAt: "24/11/2023",
  },
  {
    id: 1,
    user: {
      id: 1,
      avatar: "",
      email: "phucnq",
    },
    content: "hel sdf sdfa sdf sdf sdfs sdfsd sdfsd sd  lo",
    createAt: "24/11/2023",
  },
  {
    id: 1,
    user: {
      id: 1,
      avatar: "",
      email: "phucnq",
    },
    content: "helsdf asdfasdf sdfasdf asdfasdfas asdfasdf lo",
    createAt: "24/11/2023",
  },
];

interface ClientViewProps {
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
  };
}

export default function ClientView({ jobDetail }: ClientViewProps) {

  
  return (
    <Stack gap="10px">
      <JobDetail jobDetail={jobDetail}></JobDetail>
      {/* <ListEvent listEvent={listEvent}></ListEvent> */}
      {/* <ListApplicant /> */}
      {/* {jobStatus == 'open' ? <ListApplicant></ListApplicant> : <ListEvent listEvent={[]}></ListEvent>} */}
    </Stack>
  );
}
