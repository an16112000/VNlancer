import ButtonApply from "@/features/job-detail/ButtonApply";
import { Box, Button, Stack } from "@mui/material";
import { JobDetailData } from "../JobDetail";
import PopUpApplly from "./pop-up-apply";
import { useState } from "react";

const jobDetailData: JobDetailData = {
    id: 1,
    name: 'Web',
    budget: 21000,
    information: 'create FE web',
    categoryName: ['Front-end'],
    typeOfEmployee: 'full time',
    jobLevel: 'Fresher',
    postDate: '17/11',
    dueDate: '20/11',
    status: 'open',
    client: {
        name: 'An Doan',
    }
}

export default function JobContent() {
    const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
    return (
        <>
            <Stack
                sx={{
                    padding: '8px',
                    backgroundColor: '#fff',
                    borderRadius: '8px'
                }}
                gap={'15px'}
            >
                <Box sx={{
                    fontSize: '16px'
                }}>
                    {jobDetailData.postDate} - {jobDetailData.dueDate}
                </Box>

                <Stack>
                    <Stack
                        flexDirection={'row'}
                        alignItems={'center'}
                        justifyContent={'space-between'}
                    >
                        <Box sx={{ fontSize: '20px', fontWeight: 500 }}>{jobDetailData.name.toUpperCase()}</Box>
                        <Button>Open</Button>
                    </Stack>

                    <Stack
                        flexDirection={'row'}
                        alignItems={'center'}
                        gap={'15px'}
                    >
                        <Box sx={{
                            backgroundColor: 'red',
                            height: '50px',
                            width: '50px',
                            borderRadius: '8px'
                        }}>

                        </Box>
                        <Box sx={{ fontSize: '16px' }}>{jobDetailData.client.name}</Box>
                    </Stack>

                </Stack>

                <Stack
                    flexDirection={'row'}
                    alignItems={'center'}
                    justifyContent={'space-between'}
                >
                    <Box sx={{ color: '#297958', fontSize: '16px' }}>{jobDetailData.budget}$</Box>
                    <Box>{jobDetailData.typeOfEmployee}</Box>
                </Stack>

                <Stack
                    flexDirection={'row'}
                    alignItems={'center'}
                    justifyContent={'space-between'}
                    gap={'30px'}
                >
                    {/* <Button sx={{ flex: 1, backgroundColor: '#4B69B6', color: '#fff', borderRadius: '6px' }}>Applly Now</Button>
                <Button sx={{ flex: 1, backgroundColor: '#4B69B6', color: '#fff', borderRadius: '6px' }}>Save</Button> */}
                    <ButtonApply onClick={handleOpen}>Applly Now</ButtonApply>
                    <ButtonApply>Save</ButtonApply>
                </Stack>

                <Stack>
                    <ul>
                        {jobDetailData.jobLevel ?? <li>{jobDetailData?.jobLevel}</li>}
                        {jobDetailData.categoryName.map(
                            item => <li key={item}>{item}</li>
                        )}
                    </ul>
                </Stack>

                <Box sx={{
                    height: '1px',
                    width: '100%',
                    margin: 'auto',
                    border: '0.5px dashed  #ccc'
                }}></Box>

                <Box sx={{
                    minHeight: '100px'
                }}>
                    {jobDetailData.information}
                </Box>
            </Stack>
            <PopUpApplly isOpen={open} handleClose={handleClose}></PopUpApplly>
        </>
    )
}