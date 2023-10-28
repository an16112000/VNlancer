import Btn from "@/components/button"
import { Box, FormControl, FormHelperText, Input, InputLabel, Modal, Stack, Typography } from "@mui/material"
import OptionsOfApplication from "../options"
import TextInput from "@/components/text-input"
import TableOfApplication from "../table"
import TableOfListJobs from "../tableListJobs"
import { useState } from "react"
import ModalToPostJob from "./modalToPostJob"

const optionsClientApplications = [
    {
        title: 'Applicants'
    },
    {
        title: 'Job Details'
    }
]

function createData(
    id: number,
    item2: any,
    item3: string,
    item4: any,
    item5: string,
    item6: string,
    item7: string,
) {
    return { id, item2, item3, item4, item5, item6, item7 };
}

const rows = [
    createData(1, 'Social Media Assistant', 'Live', '20 May 2020', '24 July 2021', '19', '4/11'),
    createData(2, 'Social Media Assistant', 'Closed', '20 May 2020', '24 July 2021', '19', '4/11'),
    createData(3, 'Social Media Assistant', 'Live', '20 May 2020', '24 July 2021', '19', '4/11'),
    createData(4, 'Social Media Assistant', 'Closed', '20 May 2020', '24 July 2021', '19', '4/11'),
    createData(5, 'Social Media Assistant', 'Live', '20 May 2020', '24 July 2021', '19', '4/11'),


];



const headers = ['#', 'Roles', 'Status', 'Date Posted', 'Due Date', 'Applicants', 'Needs']

export function ClientApplications() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <>
            <Stack justifyContent={'end'} flexDirection={'row'}>
                <Btn>+ Competition</Btn>
                <Btn onClick={handleOpen}>+ Post a job</Btn>

            </Stack>
            {/* <OptionsOfApplication options={optionsClientApplications} /> */}
            <Stack sx={{ marginTop: '25px' }} flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'}>
                <Box sx={{ fontSize: '16px', fontWeight: '500' }}>My Applications</Box>
                <Stack gap={'10px'} flexDirection={'row'} alignItems={'center'}>
                    <Btn>Filter</Btn>
                </Stack>
            </Stack>
            <TableOfListJobs rows={rows} headers={headers} />
            <ModalToPostJob isOpen={open} handleClose={handleClose}/>
        </>

    )
}