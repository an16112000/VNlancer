import ButtonApply from "@/features/job-detail/ButtonApply";
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

export interface JobDetailData {
  id: number;
  name: string;
  budget: number;
  information: string;
  categoryName: any[];
  typeOfEmployee: string;
  jobLevel: string;
  postDate: string;
  dueDate: string;
  status: string;
  client: {
    name: string;
    avatarUrl?: string;
  };
}

interface Props {
  jobDetail: JobDetailData;
}

const jobDetailData: JobDetailData = {
  id: 1,
  name: "Web",
  budget: 21000,
  information: "create FE web",
  categoryName: ["Front-end"],
  typeOfEmployee: "full time",
  jobLevel: "Fresher",
  postDate: "17/11",
  dueDate: "20/11",
  status: "open",
  client: {
    name: "An Doan",
  },
};

export default function JobDetail({ jobDetail }: Props) {
  const [status, setStatus] = useState(jobDetail.status);

  const handleChange = (event: SelectChangeEvent) => {
    setStatus(event.target.value as string);
  };
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
        <Box
          sx={{
            fontSize: "16px",
          }}
        >
          {jobDetailData.postDate} - {jobDetailData.dueDate}
        </Box>

        <Stack>
          <Stack
            flexDirection={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Box sx={{ fontSize: "20px", fontWeight: 500 }}>
              {jobDetailData.name.toUpperCase()}
            </Box>
            <Button>
              <FormControl>
                <InputLabel id="status-job">Status</InputLabel>
                <Select onChange={handleChange} id="status-job" value={status} label="status" sx={{textTransform: 'none'}}>
                <MenuItem value={'Open'}>Open</MenuItem>
                  <MenuItem value={'Applied'}>Applied</MenuItem>
                  <MenuItem value={'During'}>During</MenuItem>
                  <MenuItem value={'Close'}>Close</MenuItem>
                </Select>
              </FormControl>
            </Button>
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
            <Box sx={{ fontSize: "16px" }}>{jobDetailData.client.name}</Box>
          </Stack>
        </Stack>

        <Stack
          flexDirection={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Box sx={{ color: "#297958", fontSize: "16px" }}>
            {jobDetailData.budget}$
          </Box>
          <Box>{jobDetailData.typeOfEmployee}</Box>
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
            {jobDetailData.jobLevel ?? <li>{jobDetailData?.jobLevel}</li>}
            {jobDetailData.categoryName.map((item) => (
              <li key={item}>{item}</li>
            ))}
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
          {jobDetailData.information}
        </Box>
      </Stack>
    </>
  );
}
