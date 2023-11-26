import Btn from "@/components/button"
import { Box, Stack } from "@mui/material"
import FreelancerJobTable from "./FreelancerJobTable"
import ModalToPostJob from "./CreateJobModel"
import ClientJobTable from "./ClientJobTable"
import { useState, useEffect } from "react"
import { useRouter } from "next/router"

export default function ListSavedJobs() {
    const [open, setOpen] = useState(false);
    const { asPath } = useRouter()
    const [isFreelancer, setIsFreelancer] = useState(true)


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
            {isFreelancer ?
                <>
                    <Stack paddingY='10px' flexDirection={'row'} justifyContent='space-between'>
                        <Box sx={{ fontSize: '16px', fontWeight: '500' }}>Applications History</Box>
                        <Stack gap={'10px'} flexDirection='row' alignItems='center'>
                            <Btn>Search</Btn>
                            <Btn>Filter</Btn>
                        </Stack>
                    </Stack>
                    <FreelancerJobTable filter={["Applied", "Accepted"]} />
                </>
                :
                <>
                    <Stack flexDirection='row' justifyContent='space-between' alignItems='center'>
                        <Box sx={{ fontSize: '16px', fontWeight: '500' }}>My Applications</Box>
                        <Stack gap='10px' flexDirection='row' alignItems='center'>
                            <Btn onClick={handleOpen}>+ Post a job</Btn>
                            <Btn>Filter</Btn>
                        </Stack>
                    </Stack>
                    <ClientJobTable filter={["Applied", "Accepted"]} />
                    <ModalToPostJob isOpen={open} handleClose={handleClose} />
                </>}
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
    )
}