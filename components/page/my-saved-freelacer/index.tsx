import { Button, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { useRouter } from "next/router";
import GoldenStar from "../profile/GoldenStar";
import StatusCheck from "@/components/statusCheck";

const headers = ["#", "Full Name", "Score", "Applied Date", "Action"];

interface SavedFreelancer {
  id: number;
  score: number;
  fullName: string;
  appliedDate: string;
}

const rows: SavedFreelancer[] = [
  {
    id: 1,
    fullName: "A",
    score: 4.0,
    appliedDate: "24 July 2021",
  },
  {
    id: 1,
    fullName: "B",
    score: 4.0,
    appliedDate: "24 July 2021",
  },
  {
    id: 1,
    fullName: "B",
    score: 4.0,
    appliedDate: "24 July 2021",
  },
  {
    id: 1,
    fullName: "C",
    score: 4.0,
    appliedDate: "24 July 2021",
  },
  {
    id: 1,
    fullName: "D",
    score: 4.0,
    appliedDate: "24 July 2021",
  },
  {
    id: 1,
    fullName: "E",
    score: 4.0,
    appliedDate: "24 July 2021",
  },
  {
    id: 1,
    fullName: "F",
    score: 4.0,
    appliedDate: "24 July 2021",
  },
];

export default function SavedJobsComponent() {
    const router = useRouter();
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
          {headers.map((item, index) => (
            <TableCell key={index} align="center">
              {item}
            </TableCell>
          ))}
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow
              onClick={() => router.push(`/client/job/${row.id}`)}
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell sx={{ color: "text.third" }} align="center">
                {index}
              </TableCell>
              <TableCell sx={{ color: "text.third" }} align="center">
                <Stack>{row.fullName}</Stack>
              </TableCell>
              <TableCell sx={{ color: "text.third" }} align="right">
                <Stack flexDirection={'row'} alignItems={'center'} sx={{lineHeight: '16px'}} justifyContent={'center'} gap={'5px'}>
                {row.score}
                <GoldenStar />
                </Stack>
              </TableCell>
              <TableCell sx={{ color: "text.third" }} align="center">
                {row.appliedDate}
              </TableCell>
              <TableCell sx={{ color: "text.third" }} align="center">
                <Button
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
                  See Application
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}