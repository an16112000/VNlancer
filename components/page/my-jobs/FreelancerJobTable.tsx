import useMyTaskApi from "@/api/my-task";
import JobStatusLabel, {
  JobStatus,
} from "@/components/page/dashboard/JobStatusLabel";
import {
  Button,
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
import ModalChangeJobStatus from "../jobs/[id]/modal-change-job-status";
import ModalChangeTaskStatus from "./ModalChangeTaskStatus";

const headers = ["#", "Job Name", "Date Applied", "Action", "Status"];

// export interface Task {
//   id: number;
//   name: string;
//   applyDate: string;
//   status: JobStatus;
// }

// const rows: Task[] = [
//   {
//     id: 1,
//     name: "Nomad",
//     applyDate: "24 July 2021",
//     status: JobStatus.accepted,
//   },
//   {
//     id: 1,
//     name: "Nomad",
//     applyDate: "24 July 2021",
//     status: JobStatus.done,
//   },
//   {
//     id: 1,
//     name: "Nomad",
//     applyDate: "24 July 2021",
//     status: JobStatus.doing,
//   },
//   {
//     id: 1,
//     name: "Nomad",
//     applyDate: "24 July 2021",
//     status: JobStatus.inReview,
//   },
//   {
//     id: 1,
//     name: "Nomad",
//     applyDate: "24 July 2021",
//     status: JobStatus.close,
//   },
//   {
//     id: 1,
//     name: "Nomad",
//     applyDate: "24 July 2021",
//     status: JobStatus.applied,
//   },
// ];

interface FreelancerJobTableProps {
  filter: string[];
  isDuring: boolean;
  toStatus: string;
}

interface Task {
  id: number;
  status: JobStatus;
  job: {
    id: number;
    name: string;
    budget: number;
    information: string;
    imageUrl: string;
    status: string;
    createAt: any;
    category: {
      id: number;
      name: string;
    };
    workingType: {
      id: number;
      name: string;
    };
    level: {
      id: number;
      name: string;
    };
  };
  user: {
    id: number;
    fullName: string;
    email: string;
  };
}

function FreelancerJobTable(props: FreelancerJobTableProps) {
  const router = useRouter();
  const [listTask, setListTask] = useState<Task[]>([]);
  const { getAllMyTask } = useMyTaskApi();
  const [selectId, setSelectId] = useState<number>(0);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  function handleClick(task: Task) {
    if (props.isDuring == true) {
      router.push(`/freelancer/job/${task.id}`);
    } else {
      router.push(`/jobs/${task.id}`);
    }
  }
  useEffect(() => {
    async function fetchData() {
      const data = await getAllMyTask();
      console.log(data);
      setListTask(data);
    }
    fetchData();
  }, []);

  function handleChangeStatus(item: any) {
    setSelectId(item.id);
    handleOpen();
  }
  console.log(selectId);
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
          {listTask ? listTask.map((task, index) => {
            console.log(task)
            if (props.filter.includes(task.status))
            return (
              <TableRow>
                <TableCell align="center" sx={{ color: "text.third" }}>
                  {index}
                </TableCell>
                <TableCell sx={{ color: "text.third" }} align="center">
                  <Stack
                    flexDirection="row"
                    justifyContent="center"
                    gap={"10px"}
                  >
                    <i className="fa-solid fa-building"></i>
                    {task.job.name}
                  </Stack>
                </TableCell>
                <TableCell sx={{ color: "text.third" }} align="center">
                  {task.job.createAt}
                </TableCell>
                <TableCell sx={{ color: "text.third" }} align="center">
                  <Button
                    onClick={() => handleClick(task)}
                    key={task.job.name}
                    sx={{
                      backgroundColor: "#1876d3",
                      color: "#fff",
                      textTransform: "none",
                      borderRadius: "8px",
                      fontWeight: "300",
                      "&:hover": {
                        backgroundColor: "#1876d3",
                        opacity: 0.7,
                      },
                    }}
                  >
                    See Progress
                  </Button>
                </TableCell>
                <TableCell sx={{ color: "text.third" }} align="center">
                  <Button
                    onClick={() => handleChangeStatus(task)}
                    sx={{
                      ".MuiBox-root": {
                        padding: "4px 8px",
                      },
                    }}
                  >
                    <JobStatusLabel jobStatus={task.status} />
                  </Button>
                </TableCell>
              </TableRow>
            );
          }): <></>}
        </TableBody>
      </Table>
      <ModalChangeTaskStatus
        taskId={selectId}
        open={open}
        handleClose={handleClose}
        status={props.toStatus}
      />
    </TableContainer>
  );
}

export default FreelancerJobTable;
