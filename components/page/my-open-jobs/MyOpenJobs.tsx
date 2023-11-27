import Btn from "@/components/button";
import { Box, Stack } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import FreelancerJobTable from "../my-jobs/FreelancerJobTable";
import ClientJobTable from "../my-jobs/ClientJobTable";
import ModalToPostJob from "../my-jobs/CreateJobModel";

export default function MyOpenJobsComponent() {
  const [open, setOpen] = useState(false);
  const { asPath } = useRouter();
  const [isFreelancer, setIsFreelancer] = useState(true);

  useEffect(() => {
    if (asPath.includes("/freelancer")) {
      setIsFreelancer(true);
    } else {
      setIsFreelancer(false);
    }
  }, [asPath]);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      {isFreelancer ? (
        <>
          <Stack
            paddingY="10px"
            flexDirection={"row"}
            justifyContent="space-between"
          >
            <Box sx={{ fontSize: "16px", fontWeight: "500" }}>
              Applications History
            </Box>
            <Stack gap={"10px"} flexDirection="row" alignItems="center">
              <Btn>Search</Btn>
              <Btn>Filter</Btn>
            </Stack>
          </Stack>
          <FreelancerJobTable
            filter={["During", "In Review"]}
            isDuring={true}
          />
        </>
      ) : (
        <>
          <Stack
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box sx={{ fontSize: "16px", fontWeight: "500" }}>
              My Open Jobs
            </Box>
            <Stack gap="10px" flexDirection="row" alignItems="center">
              <Btn onClick={handleOpen}>+ Post a job</Btn>
              <Btn>Filter</Btn>
            </Stack>
          </Stack>
          <ClientJobTable filter={["Opening"]} />
          <ModalToPostJob isOpen={open} handleClose={handleClose} />
        </>
      )}
    </>
  );
}
