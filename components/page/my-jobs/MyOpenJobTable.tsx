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
import JobStatusLabel from "../dashboard/JobStatusLabel";
import { use, useEffect, useState } from "react";
import useApplicationApi from "@/api/application";

interface MyOpenJobTableProps {
  job: any;
  index: number;
}

export default function MyOpenJobTable({ job, index }: MyOpenJobTableProps) {
  const router = useRouter();
  const [amoutOfApllicant, setAmoutOfApplicant] = useState<number>();
  const { getAllJobApplication } = useApplicationApi();

  useEffect(() => {
    async function fetchData() {
      const data = (await getAllJobApplication(job.id)).length;
      setAmoutOfApplicant(data);
      console.log(data);
    }
    fetchData();
  }, []);
  return (
    <>
      <TableRow
        onClick={() => router.push(`/client/my-applicants/${job.id}`)}
        key={job.name}
        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
      >
        <TableCell sx={{ color: "text.third" }} align="center">
          {index}
        </TableCell>
        <TableCell sx={{ color: "text.third" }} align="center">
          <Stack>{job.name}</Stack>
        </TableCell>
        <TableCell sx={{ color: "text.third" }} align="center">
          <JobStatusLabel jobStatus={job.status} />
        </TableCell>
        <TableCell sx={{ color: "text.third" }} align="center">
          {job.postDate}
        </TableCell>
        <TableCell sx={{ color: "text.third" }} align="center">
          {job.dueDate}
        </TableCell>
        <TableCell sx={{ color: "text.third" }} align="center">
          {amoutOfApllicant}
        </TableCell>
        <TableCell sx={{ color: "text.third" }} align="center">
          {job.workingType.name}
        </TableCell>
      </TableRow>
    </>
  );
}
