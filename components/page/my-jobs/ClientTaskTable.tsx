import StatusCheck from "@/components/statusCheck";
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
} from "@mui/material";
import { useRouter } from "next/router";
import JobStatusLabel, { JobStatus } from "../dashboard/JobStatusLabel";
import MyOpenJobTable from "./MyOpenJobTable";
import TaskClient from "./ClientTask";
import { useState } from "react";
import ModalChangeTaskStatus from "./ModalChangeTaskStatus";

const headers = ["#", "Name", "Category", "Working Type", "Action", "Status"];

export interface ClientJob {
  id: number;
  name: string;
  status: string;
  postDate: string;
  dueDate: string;
  applicants: number;
  employeeType: string;
}

const rows: ClientJob[] = [
  {
    id: 1,
    name: "Social Media Assistant",
    status: "Applied",
    postDate: "20 May 2020",
    dueDate: "24 July 2021",
    applicants: 3,
    employeeType: "remote",
  },
  {
    id: 1,
    name: "Social Media Assistant",
    status: "During",
    postDate: "20 May 2020",
    dueDate: "24 July 2021",
    applicants: 3,
    employeeType: "remote",
  },
  {
    id: 1,
    name: "Social Media Assistant",
    status: "Accepted",
    postDate: "20 May 2020",
    dueDate: "24 July 2021",
    applicants: 3,
    employeeType: "part-time",
  },
  {
    id: 1,
    name: "Social Media Assistant",
    status: "In Review",
    postDate: "20 May 2020",
    dueDate: "24 July 2021",
    applicants: 3,
    employeeType: "full-time",
  },
  {
    id: 1,
    name: "Social Media Assistant",
    status: "Done",
    postDate: "20 May 2020",
    dueDate: "24 July 2021",
    applicants: 3,
    employeeType: "full-time",
  },
  {
    id: 1,
    name: "Social Media Assistant",
    status: "Opening",
    postDate: "20 May 2020",
    dueDate: "24 July 2021",
    applicants: 3,
    employeeType: "full-time",
  },
  {
    id: 1,
    name: "Social Media Assistant",
    status: "Opening",
    postDate: "20 May 2020",
    dueDate: "24 July 2021",
    applicants: 3,
    employeeType: "full-time",
  },
];

interface ClientJobTableProps {
  toStatus?: string;
  filter?: string;
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
    task: {
      id: number;
      task: JobStatus;
    };
  }[];
}

function ClientTaskTable(props: ClientJobTableProps) {
  const router = useRouter();
  const { listJobs = [] } = props;
  console.log(listJobs);

  const [selectId, setSelectId] = useState<number>(0);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  function handleChangeStatus(item: any) {
    setSelectId(item.id);
    handleOpen();
  }

  function handleClick(task: any) {
    router.push(`/client/job/${task.id}`);
  }

  return (
    <TableContainer
      component={Paper}
      sx={{ color: "text.third", marginTop: "20px" }}
    >
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
          {listJobs.map((job: any, index: number) => {
            if (job.task && props.filter == job.task.status) {
              return (
                <>
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
                        {job.name}
                      </Stack>
                    </TableCell>
                    <TableCell sx={{ color: "text.third" }} align="center">
                      {job.category.name}
                    </TableCell>
                    <TableCell sx={{ color: "text.third" }} align="center">
                      {job.workingType.name}
                    </TableCell>
                    <TableCell sx={{ color: "text.third" }} align="center">
                      <Button
                        onClick={() => handleClick(job.task)}
                        key={job.name}
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
                        onClick={() => {
                          props.toStatus && handleChangeStatus(job.task);
                        }}
                        sx={{
                          ".MuiBox-root": {
                            padding: "4px 8px",
                          },
                        }}
                      >
                        <JobStatusLabel jobStatus={job.task.status} />
                      </Button>
                    </TableCell>
                  </TableRow>
                </>
              );
            } else {
              return <></>;
            }
          })}
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

export default ClientTaskTable;
