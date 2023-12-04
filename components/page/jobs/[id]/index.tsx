import ButtonApply from "@/features/job-detail/ButtonApply";
import { Box, Button, Stack } from "@mui/material";
import PopUpApplly from "./pop-up-apply";
import { useState } from "react";
// import { dataJob } from "@/const";
import Image from "next/image";
import { ButtonContact } from "@/pages/inbox";
import { Avatar } from "@/img";
import { JobDetailData } from "@/interface";

interface JobContentProps {
  dataJob: JobDetailData
}

export default function JobContent({ dataJob }: JobContentProps) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  console.log(dataJob)
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
        <Stack flexDirection={"row"} justifyContent={"space-between"}>
          <Box
            sx={{
              fontSize: "16px",
            }}
          >
            {dataJob?.createAt || (
              <span style={{ color: "red" }}>Cần fix thời gian tạo</span>
            )}
          </Box>
          <ButtonContact otherPersonEmail={"andoan16112000@gmail.com"} />
        </Stack>

        <Stack>
          <Stack
            flexDirection={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Box sx={{ fontSize: "20px", fontWeight: 500 }}>
              {dataJob?.name && dataJob.name.toUpperCase()}
            </Box>
            <Button>{dataJob?.status}</Button>
          </Stack>

          <Stack flexDirection={"row"} alignItems={"center"} gap={"15px"}>
            <Box
              sx={{
                height: "50px",
                width: "50px",
                borderRadius: "8px",
              }}
            >
              Chưa có image
              {/* <Image
                unoptimized
                style={{ backgroundSize: "cover", borderRadius: "8px" }}
                src={dataJob.owner ? dataJob.owner?.imageUrl : Avatar}
                alt={dataJob.owner.imageUrl as string}
                height={100}
                width={100}
              /> */}
            </Box>
            <Box sx={{ fontSize: "16px" }}>
              {dataJob?.owner && dataJob.owner.username}
            </Box>
          </Stack>
        </Stack>

        <Stack
          flexDirection={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Box sx={{ color: "#297958", fontSize: "16px" }}>
            {dataJob?.budget}$
          </Box>
          <Box>{dataJob?.workingType && dataJob.workingType.name}</Box>
        </Stack>

        <Stack
          flexDirection={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
          gap={"30px"}
        >
          <Button
            disabled={dataJob?.status != "OPEN"}
            onClick={handleOpen}
            sx={{
              flex: 1,
              backgroundColor: "#4B69B6",
              color: "#fff",
              borderRadius: "6px",
              "&:hover": {
                backgroundColor: "#4B69B6",
                opacity: 0.7,
              },
            }}
          >
            Applly Now
          </Button>
          <Button
            sx={{
              flex: 1,
              backgroundColor: "#4B69B6",
              color: "#fff",
              borderRadius: "6px",
              "&:hover": {
                backgroundColor: "#4B69B6",
                opacity: 0.7,
              },
            }}
          >
            Save
          </Button>
          {/* <ButtonApply onClick={handleOpen}>Cancle Now</ButtonApply>
                    <ButtonApply>Save</ButtonApply> */}
        </Stack>

        <Stack gap={"10px"}>
          <Box>
            <label style={{ fontWeight: 500 }}>Level: </label>
            {
              <span style={{ fontStyle: "italic" }}>
                {dataJob?.level && dataJob.level.name}
              </span>
            }
          </Box>
          {/* {dataJob.category.map((item) => (
              <li key={item}>{item}</li>
            ))} */}
          <Box>
            <label style={{ fontWeight: 500 }}>Category: </label>
            <span style={{ fontStyle: "italic" }}>
              {dataJob?.category && dataJob.category.name}
            </span>
          </Box>
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
          {dataJob?.information}
        </Box>
      </Stack>
      <PopUpApplly
        dataJob={dataJob}
        isOpen={open}
        handleClose={handleClose}
      ></PopUpApplly>
    </>
  );
}
