import StatusCheck from "@/components/statusCheck";
import {
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
import { Task } from "./FreelancerJobTable";
import JobStatusLabel, { JobStatus } from "../dashboard/JobStatusLabel";
import MyOpenJobTable from "./MyOpenJobTable";

const headers = [
  "#",
  "Name",
  "Status",
  "Date Posted",
  "Due Date",
  "Applicants",
  "Employee Type",
];

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
    status: JobStatus;
  }[];
}

function ClientJobTable(props: any) {
  const router = useRouter();
  const { listJobs } = props;
  console.log(listJobs)
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
            return (
              <MyOpenJobTable job={job} index={index} />
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default ClientJobTable;
