import { Box, Stack } from "@mui/material";
import Options from "../options";
import Btn from "@/components/button";
import TableOfApplication from "../table";
import { useState } from "react";

function createData(
    logo: any,
    item2: string,
    item3: string,
    item4: string,
    item5: any,

) {
    return { logo, item2, item3, item4, item5 };
}

const rows = [
    createData(<i className="fa-solid fa-building"></i>, 'Nomad', 'Social Media Assistant', '24 July 2021', 'In Review'),
    createData(<i className="fa-solid fa-building"></i>, 'Udacity', 'Social Media Assistant', '24 July 2021', 'Paid'),
    createData(<i className="fa-solid fa-building"></i>, 'Packer', 'Social Media Assistant', '24 July 2021', 'Schedule'),
];

const headers = ['#', 'Company Name', 'Roles', 'Date Applied', 'Status']

const optionsFreelancerApplications = [
    {
        title: 'All',
    },
    {
        title: 'Schedule',
    },
    {
        title: 'Paid',
    }
]

export function FreelancerApplications() {
    const [page, setPage] = useState('All')
    function callbackFunction(page: string) {
        setPage(page)
    }
    return (
        <>
            <Options options={optionsFreelancerApplications} onClick={callbackFunction} />
            <Stack sx={{ marginTop: '25px' }} flexDirection={'row'} justifyContent={'space-between'}>
                <Box sx={{ fontSize: '16px', fontWeight: '500' }}>Applications History</Box>
                <Box>
                    <Btn>Search</Btn>
                    <Btn>Filter</Btn>
                </Box>
            </Stack>
            <TableOfApplication rows={rows} headers={headers} />
        </>
    )
}
