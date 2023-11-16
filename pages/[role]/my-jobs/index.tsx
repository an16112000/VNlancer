import Btn from "@/components/button"
import ClientJobTable from "@/components/page/my-jobs/ClientJobTable"
import ModalToPostJob from "@/components/page/my-jobs/CreateJobModel"
import FreelancerJobTable from "@/components/page/my-jobs/FreelancerJobTable"
import { PageLayout } from "@/layout/PageLayout"
import { RootState } from "@/state/store"
import { Box, Stack } from "@mui/material"
import { useRouter } from "next/router"
import { useState, useEffect } from "react"
import { useSelector } from "react-redux"

export default function MyJobs() {
    useSelector((state: RootState) => state.user)
    const { asPath } = useRouter()
    const [isFreelancer, setIsFreelancer] = useState(true)
    useEffect(() => {
        if (asPath.includes("/freelancer")) {
            setIsFreelancer(true)
        }
        else {
            setIsFreelancer(false)
        }
    })
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <PageLayout>
            <Box>
                {
                    isFreelancer ? (
                        <>
                            <Stack paddingY='10px' flexDirection={'row'} justifyContent='space-between'>
                                <Box sx={{ fontSize: '16px', fontWeight: '500' }}>Applications History</Box>
                                <Stack gap={'10px'} flexDirection='row' alignItems='center'>
                                    <Btn>Search</Btn>
                                    <Btn>Filter</Btn>
                                </Stack>
                            </Stack>
                            <FreelancerJobTable />
                        </>
                    ) : (
                        <>
                            <Stack flexDirection='row' justifyContent='space-between' alignItems='center'>
                                <Box sx={{ fontSize: '16px', fontWeight: '500' }}>My Applications</Box>
                                <Stack gap='10px' flexDirection='row' alignItems='center'>
                                    <Btn onClick={handleOpen}>+ Post a job</Btn>
                                    <Btn>Filter</Btn>
                                </Stack>
                            </Stack>
                            <ClientJobTable />
                            <ModalToPostJob isOpen={open} handleClose={handleClose} />
                        </>
                    )
                }
            </Box>
        </PageLayout>
    )
}