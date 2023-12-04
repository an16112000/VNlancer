import useApplicationApi from "@/api/application";
import useJobApi from "@/api/jobs";
import useUserApi from "@/api/user";
import JobStatusLabel, {
  JobStatus,
} from "@/components/page/dashboard/JobStatusLabel";
import {
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const headers = ["#", "Job Name", "Working Type", "Status"];

export interface Task {
  id: number;
  name: string;
  applyDate: string;
  status: JobStatus;
}

const rows: Task[] = [
  {
    id: 1,
    name: "Nomad",
    applyDate: "24 July 2021",
    status: JobStatus.accepted,
  },
  {
    id: 1,
    name: "Nomad",
    applyDate: "24 July 2021",
    status: JobStatus.done,
  },
  {
    id: 1,
    name: "Nomad",
    applyDate: "24 July 2021",
    status: JobStatus.doing,
  },
  {
    id: 1,
    name: "Nomad",
    applyDate: "24 July 2021",
    status: JobStatus.inReview,
  },
  {
    id: 1,
    name: "Nomad",
    applyDate: "24 July 2021",
    status: JobStatus.close,
  },
  {
    id: 1,
    name: "Nomad",
    applyDate: "24 July 2021",
    status: JobStatus.applied,
  },
];

interface FreelancerJobTableProps {
  filter: string[];
  isDuring: boolean;
  listApplication: number[];
}

function ListApplicationFreelancer(props: FreelancerJobTableProps) {
  const [listJob, setListJob] = useState<any[]>([]);
  const router = useRouter();
  const hookJob = useJobApi();

  useEffect(() => {
    function fetchData() {
      props.listApplication.map(async (item: number) => {
        const data = await hookJob.getJobDetail(item);
        console.log(data);
        setListJob((prev) => [...prev, data]);
      });
    }
    fetchData();
  }, []);

  console.log(listJob);
  
  function handleClick(task: Task) {
    if (props.isDuring == true) {
      router.push(`/freelancer/job/${task.id}`);
    } else {
      router.push(`/jobs/${task.id}`);
    }
  }
  return (
    <TableContainer component={Paper} sx={{ color: "text.third" }}>
      <Table
        sx={{ minWidth: 650, color: "text.third" }}
        aria-label="simple table"
      >
        <TableHead>
          <TableRow>
            {headers.map((item, index) => (
              <TableCell key={index} align="center">
                {item}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {listJob.map((job, index) => {
            if (props.filter.includes(job.status))
              return (
                <TableRow onClick={() => handleClick(job)} key={job.name}>
                  <TableCell align="center" sx={{ color: "text.third" }}>
                    {job.id}
                  </TableCell>
                  <TableCell sx={{ color: "text.third" }} align="center">
                    <Stack
                      flexDirection="row"
                      justifyContent="center"
                      gap={"10px"}
                    >
                      <i className="fa-solid fa-building"></i>
                      {job.name}
                    </Stack>
                  </TableCell>
                  <TableCell sx={{ color: "text.third" }} align="center">
                    {job.applyDate}
                  </TableCell>
                  <TableCell sx={{ color: "text.third" }} align="center">
                    <JobStatusLabel jobStatus={job.status} />
                  </TableCell>
                </TableRow>
              );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default ListApplicationFreelancer;
