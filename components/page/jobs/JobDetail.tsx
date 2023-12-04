import ButtonApply from "@/features/job-detail/ButtonApply";
import { JobDetailData } from "@/interface";
import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
} from "@mui/material";
import { useState } from "react";
import { JobStatus } from "../dashboard/JobStatusLabel";
import { ButtonContact } from "@/pages/inbox";

// export interface JobDetailData {
//   category: any;
//   level: any;
//   workingType: any;
//   owner: any;
//   createAt: any;
//   id: number;
//   name: string;
//   budget: number;
//   information: string;
//   categoryName: any[];
//   typeOfEmployee: string;
//   jobLevel: string;
//   postDate: string;
//   dueDate: string;
//   status: string;
//   client: {
//     name: string;
//     avatarUrl?: string;
//   };
// }

interface Props {
  jobDetail: JobDetailData;
}

export default function JobDetail({ jobDetail }: Props) {
  console.log(jobDetail);

  return (
    <>
      <Stack
        sx={{
          padding: "8px",
          backgroundColor: "#fff",
          borderRadius: "8px",
        }}
        gap={"15px"}
      >
        <Stack flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'}>
          <Box
            sx={{
              fontSize: "16px",
            }}
          >
            Fix Time
          </Box>
          <ButtonContact otherPersonEmail={jobDetail.owner.email} />
        </Stack>

        <Stack>
          <Stack
            flexDirection={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Box sx={{ fontSize: "20px", fontWeight: 500 }}>
              {jobDetail.name.toUpperCase()}
            </Box>
            <Button></Button>
          </Stack>

          <Stack flexDirection={"row"} alignItems={"center"} gap={"15px"}>
            <Box
              sx={{
                backgroundColor: "red",
                height: "50px",
                width: "50px",
                borderRadius: "8px",
              }}
            ></Box>
            <Box sx={{ fontSize: "16px" }}>{jobDetail.owner.fullName}</Box>
          </Stack>
        </Stack>

        <Stack
          flexDirection={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Box sx={{ color: "#297958", fontSize: "16px" }}>
            {jobDetail.budget}$
          </Box>
          <Box>{jobDetail.workingType && jobDetail.workingType.name}</Box>
        </Stack>

        {/* <Stack
                flexDirection={'row'}
                alignItems={'center'}
                justifyContent={'space-between'}
                gap={'30px'}
            >
                <ButtonApply>Applly Now</ButtonApply>
                <ButtonApply>Save</ButtonApply>
            </Stack> */}

        <Stack>
          <ul>
            {jobDetail.level?.name && <li>{jobDetail.level.name}</li>}
            {jobDetail.category?.name}
          </ul>
        </Stack>

        <Box
          sx={{
            height: "1px",
            width: "100%",
            margin: "auto",
            border: "0.5px dashed  #ccc",
          }}
        ></Box>

        <Box
          sx={{
            minHeight: "100px",
          }}
        >
          {jobDetail.information}
        </Box>
      </Stack>
    </>
  );
}
