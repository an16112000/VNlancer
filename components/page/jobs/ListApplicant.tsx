import StatusCheck from "@/components/statusCheck";
import {
  Box,
  Button,
  Modal,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import { ClientJob } from "../my-jobs/ClientJobTable";
import GoldenStar from "../profile/GoldenStar";
import JobStatusLabel, { JobStatus } from "../dashboard/JobStatusLabel";
import ModalCV from "./ModalCV";
import { useState } from "react";
import ModalChangeJobStatus from "./[id]/modal-change-job-status";
import ModalProfileFreelancer from "./[id]/modal-profile-freelancer";

const headers = ["#", "Full Name", "Score", "Applied Date", "Action", "Status"];

interface AppliedFreelancer {
  id: number;
  score: number;
  fullName: string;
  appliedDate: string;
  status: string;
}

const rows: AppliedFreelancer[] = [
  {
    id: 1,
    fullName: "A",
    score: 4.0,
    appliedDate: "24 July 2021",
    status: "Applied",
  },
  {
    id: 1,
    fullName: "B",
    score: 4.0,
    appliedDate: "24 July 2021",
    status: "During",
  },
  {
    id: 1,
    fullName: "B",
    score: 4.0,
    appliedDate: "24 July 2021",
    status: "Accepted",
  },
  {
    id: 1,
    fullName: "C",
    score: 4.0,
    appliedDate: "24 July 2021",
    status: "In Review",
  },
  {
    id: 1,
    fullName: "D",
    score: 4.0,
    appliedDate: "24 July 2021",
    status: "Done",
  },
  {
    id: 1,
    fullName: "E",
    score: 4.0,
    appliedDate: "24 July 2021",
    status: "Opening",
  },
  {
    id: 1,
    fullName: "F",
    score: 4.0,
    appliedDate: "24 July 2021",
    status: "Opening",
  },
];

interface ListApplicant {
  id: number;
  score: number;
  appliedDate: string;
  user: {
    id: number;
    fullName: string;
  };
  profile: {
    id: number;
  };
  job: {
    id: number;
    name: string;
    workingType: {
      id: number;
      name: string;
    };
  };
  status: JobStatus;
}
[];

interface ListApplicantProps {
  filter: any;
  listApplicant: ListApplicant[];
}

interface listData {
  id: number;
  user: {
    id: number;
    fullName: string;
    gender: string;
    dateOfBirth: string;
    phoneNumber: string;
    address: string;
  };
  profile: {
    id: number;
    workingType: {
      id: number;
      name: string;
    };
    category: {
      id: number;
      name: string;
    };
    level: {
      id: number;
      name: string;
    };
    skill: string;
    workExperience: string;
    aboutMe: string;
  };
  job: {
    id: number;
    name: string;
  };
  status: JobStatus;
}

export default function ListApplicant({
  listApplicant,
  filter,
}: ListApplicantProps) {
  const router = useRouter();
  const [selectId, setSelectId] = useState<number>(0);
  console.log(listApplicant);

  const [modalOpen, setModalOpen] = useState(false);
  const handleModalClose = () => setModalOpen(false);

  const handlModalOpen = (item: any) => {
    setModalOpen(true);
    setProfile(item);
  };
  const [selectUserId, setSelectUserId] = useState(0);
  const [profile, setProfile] = useState<listData>({
    id: 1,
    user: {
      id: 1,
      fullName: "An",
      gender: "Male",
      dateOfBirth: "2000-11-16 00:00:00.0",
      phoneNumber: "123123123",
      address: "212121212",
    },
    profile: {
      id: 2,
      workingType: {
        id: 2,
        name: "FT",
      },
      category: {
        id: 1,
        name: "FE",
      },
      level: {
        id: 2,
        name: "Fresher",
      },
      skill: "1212121",
      workExperience: "12",
      aboutMe: "12121212123qweqweq",
    },
    job: {
      id: 1,
      name: "Test 1",
    },
    status: JobStatus.applied,
  });

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  function handleChangeStatus(item: any) {
    setSelectId(item.id);
    handleOpen();
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
          {headers.map((item, index) => (
            <TableCell key={index} align="center">
              {item}
            </TableCell>
          ))}
        </TableHead>
        <TableBody>
          {listApplicant.map((item, index) => {
            console.log(item.status, filter);
            if (item.status != filter) {
              return;
            }
            return (
              <TableRow
                key={item.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell sx={{ color: "text.third" }} align="center">
                  {index}
                </TableCell>
                <TableCell sx={{ color: "text.third" }} align="center">
                  <Stack>{item.user.fullName}</Stack>
                </TableCell>
                <TableCell sx={{ color: "text.third" }} align="center">
                  <Stack
                    flexDirection={"row"}
                    alignItems={"center"}
                    sx={{ lineHeight: "16px" }}
                    gap={"5px"}
                  >
                    {item.score}
                    <GoldenStar />
                  </Stack>
                </TableCell>
                <TableCell sx={{ color: "text.third" }} align="center">
                  {item.appliedDate}
                </TableCell>
                <TableCell sx={{ color: "text.third" }} align="center">
                  <Button
                    onClick={() => {
                      handlModalOpen(item);
                    }}
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
                <TableCell sx={{ color: "text.third" }} align="center">
                  <Button
                    onClick={() =>
                      item.status == "APPLIED" && handleChangeStatus(item)
                    }
                    sx={{
                      ".MuiBox-root": {
                        padding: "4px 8px",
                      },
                    }}
                  >
                    <JobStatusLabel jobStatus={item.status} />
                  </Button>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
      <ModalChangeJobStatus
        jobId={selectId}
        open={open}
        handleClose={handleClose}
        status="ACCEPTED"
      />
      <ModalProfileFreelancer
        open={modalOpen}
        handleClose={handleModalClose}
        userId={selectUserId}
        profile={profile}
      />
    </TableContainer>
  );
}
