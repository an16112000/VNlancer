import Btn from "@/components/button"
import { Box, Stack } from "@mui/material"
import FreelancerJobTable from "./FreelancerJobTable"
import ModalToPostJob from "./CreateJobModel"
import ClientJobTable from "./ClientJobTable"
import { useState, useEffect } from "react"
import { useRouter } from "next/router"
import ListApplicationFreelancer from "./ListApplicationFreelancer"
import useApplicationApi from "@/api/application"
import useUserApi from "@/api/user"
import useJobApi from "@/api/jobs"

export default function PendingJobComponent() {
    const [open, setOpen] = useState(false);
    const { asPath } = useRouter()
    const [isFreelancer, setIsFreelancer] = useState(true)
    const [listApplication, setListApllication] = useState<any>([]);

    const hookApllication = useApplicationApi();
    const hookUser = useUserApi();
    const hookJob = useJobApi();

    useEffect(() => {
      async function fetchData() {
        const userId = (await hookUser.getUserInformation()).data.id;
        const data = await hookApllication.getAllApplicationFreelancer(userId);
        data.map((item: any) => {
          setListApllication((prev: any[]) => {
            if (prev.includes(item.job.id)) {
              return prev;
            } else {
              return [...prev, item.job.id];
            }
          });
        });
        // const jobInfo = await hookJob.getJobDetail(data.job.id)
        console.log(data);
        // setListApllication(data)
      }
      fetchData();
    }, []);
    console.log(listApplication);


    useEffect(() => {
        if (asPath.includes("/freelancer")) {
            setIsFreelancer(true)
        }
        else {
            setIsFreelancer(false)
        }
    }, [asPath])
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
                Applied Jobs
              </Box>
              <Stack gap={"10px"} flexDirection="row" alignItems="center">
                <Btn>Search</Btn>
                <Btn>Filter</Btn>
              </Stack>
            </Stack>
            <ListApplicationFreelancer
              listApplication={listApplication}
              filter={["Applied", "Accepted"]}
              isDuring={false}
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
                My Applications
              </Box>
              <Stack gap="10px" flexDirection="row" alignItems="center">
                <Btn onClick={handleOpen}>+ Post a job</Btn>
                <Btn>Filter</Btn>
              </Stack>
            </Stack>
            <ClientJobTable filter={["Applied", "Accepted"]} />
            <ModalToPostJob isOpen={open} handleClose={handleClose} />
          </>
        )}
        {/* <Stack paddingY='10px' flexDirection={'row'} justifyContent='space-between'>
                <Box sx={{ fontSize: '16px', fontWeight: '500' }}>Applications History</Box>
                <Stack gap={'10px'} flexDirection='row' alignItems='center'>
                    <Btn>Search</Btn>
                    <Btn>Filter</Btn>
                </Stack>
            </Stack>
            <FreelancerJobTable /> */}
      </>
      // ) : (
      //     <>
      //         <Stack flexDirection='row' justifyContent='space-between' alignItems='center'>
      //             <Box sx={{ fontSize: '16px', fontWeight: '500' }}>My Applications</Box>
      //             <Stack gap='10px' flexDirection='row' alignItems='center'>
      //                 <Btn onClick={handleOpen}>+ Post a job</Btn>
      //                 <Btn>Filter</Btn>
      //             </Stack>
      //         </Stack>
      //         <ClientJobTable />
      //         <ModalToPostJob isOpen={open} handleClose={handleClose} />
      //     </>
    );
}