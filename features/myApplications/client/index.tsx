import Btn from "@/components/button"
import { Box, Stack } from "@mui/material"
import TableOfListJobs from "../tableListJobs"
import { useState } from "react"
import ModalToPostJob from "./modalToPostJob"

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



const headers = ['#', 'Name', 'Status', 'Date Posted', 'Due Date', 'Applicants', 'Employee Type', 'Needs']

export function ClientApplications() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <Stack flexDirection='row' justifyContent='space-between' alignItems='center'>
                <Box sx={{ fontSize: '16px', fontWeight: '500' }}>My Applications</Box>
                <Stack gap={'10px'} flexDirection='row' alignItems='center'>
                    <Btn onClick={handleOpen}>+ Post a job</Btn>
                    <Btn>Filter</Btn>
                </Stack>
            </Stack>
            <TableOfListJobs rows={rows} headers={headers} />
            <ModalToPostJob isOpen={open} handleClose={handleClose} />
        </>

    )
}