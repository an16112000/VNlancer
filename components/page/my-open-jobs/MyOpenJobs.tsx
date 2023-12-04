import Btn from "@/components/button";
import { Box, Stack } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import FreelancerJobTable from "../my-jobs/FreelancerJobTable";
import ClientJobTable from "../my-jobs/ClientJobTable";
import ModalToPostJob from "../my-jobs/CreateJobModel";
import useMyJobApi from "@/api/my-job";
import useUserApi from "@/api/user";
import { JobDetailData } from "@/interface";
import { useSession } from "next-auth/react";

interface ClientJobTableProps {
  listJobs: {
    id: number;
    name: string;
    budget: number;
    information: string;
    category: {
      id: number;
      name: string;
    };
    level: {
      id: number;
      name: string;
    };
    createAt: any;
    owner: {
      id: number;
      fullName: string;
      imageUrl: any;
    };
    workingType: {
      id: number;
      name: string;
    };
    imageUrl: any;
    status: string;
  }[];
}

export default function MyOpenJobsComponent() {
  const { data: session, status } = useSession();
  const [open, setOpen] = useState(false);
  const { getMyJob } = useMyJobApi();
  const { getUserInformation } = useUserApi();
  const [listJobs, setListJobs] = useState([]);

  useEffect(() => {
    if (status == "authenticated") {
      fetchData();
    }
    async function fetchData() {
      const userId = (await getUserInformation()).id;
      const data = await getMyJob(userId);
      console.log(data)
      setListJobs(data);
    }
  }, [status]);
  console.log(listJobs)
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  async function refreshList() {
    const userId = (await getUserInformation()).id;
    const data = await getMyJob(userId);
    setListJobs(data);
  }

  return (
    <>
      <Stack
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box sx={{ fontSize: "16px", fontWeight: "500" }}>My Open Jobs</Box>
        <Stack gap="10px" flexDirection="row" alignItems="center">
          <Btn onClick={handleOpen}>+ Post a job</Btn>
          <Btn>Filter</Btn>
        </Stack>
      </Stack>
      <ClientJobTable listJobs={listJobs} />
      <ModalToPostJob
        refreshList={refreshList}
        isOpen={open}
        handleClose={handleClose}
      />
    </>
  );
}
