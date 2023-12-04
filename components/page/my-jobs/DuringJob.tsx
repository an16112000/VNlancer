import Btn from "@/components/button"
import { Box, Stack } from "@mui/material"
import FreelancerJobTable from "./FreelancerJobTable"
import ModalToPostJob from "./CreateJobModel"
import ClientJobTable from "./ClientJobTable"
import { useState, useEffect } from "react"
import { useRouter } from "next/router"
import useJobApi from "@/api/jobs"
import ClientTaskTable from "./ClientTaskTable"

interface DuringJobComponentProps {
    toStatus: string
}

export default function DuringJobComponent({toStatus}: DuringJobComponentProps) {
    const [open, setOpen] = useState(false);
    const { asPath } = useRouter()
    const [isFreelancer, setIsFreelancer] = useState(true)
    const [listData, setListData]= useState([])
    const {getAllJob} = useJobApi()
    useEffect(() => {
        if (asPath.includes("/freelancer")) {
            setIsFreelancer(true)
        }
        else {
            setIsFreelancer(false)
        }
    }, [asPath])

    useEffect(
        () => {
            async function fetchData() {
                const data = await getAllJob();
                setListData(data)
            }
            fetchData()
        }, []
    )
    console.log(listData)
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    console.log(2)
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
              filter={["DOING"]}
              isDuring={true}
              toStatus={"IN REVIEW"}
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
            <ClientTaskTable
              filter={"DOING"}
              listJobs={listData}
              toStatus=''
            />
            <ModalToPostJob isOpen={open} handleClose={handleClose} />
          </>
        )}
      </>
    );
}