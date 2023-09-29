import { Box, Stack } from "@mui/material";
import OptionsOfApplication from "../options";
import Btn from "@/components/button";
import TextInput from "@/components/text-input";
import TableOfApplication from "../table";
import { useState } from "react";

const optionsClientApplicants = [
    {
        title: 'Applicants'
    },
    {
        title: 'Job Details'
    }
]

function createData(
    logo: any,
    item2: string,
    item3: any,
    item4: string,
    item5: string,

) {
    return { logo, item2, item3, item4, item5 };
}

const rows = [
    createData(<i className="fa-solid fa-building"></i>, 'Jake Gil', '0.0', '24 July 2021', 'See Application'),
    createData(<i className="fa-solid fa-building"></i>, 'Udacity', 'Social Media Assistant', '24 July 2021', 'See Application'),
    createData(<i className="fa-solid fa-building"></i>, 'Packer', 'Social Media Assistant', '24 July 2021', 'See Application'),
];

const headers = ['#', 'Full Name', 'Score', 'Applied Date', 'Action']

export function ClientApplicants() {
    const [currentPage, setCurrentPage] = useState('Applicants')
    function handleChangePage(page: string) {
        setCurrentPage(page)
    }
    return (
        <>
            <Stack justifyContent={'end'} flexDirection={'row'}>
                <Btn>+ Competition</Btn>
                <Btn>+ Post a job</Btn>
            </Stack>
            <OptionsOfApplication options={optionsClientApplicants} onClick={handleChangePage} />
            {currentPage === 'Applicants' ? <> <Stack sx={{ marginTop: '25px' }} flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'}>
                <Box sx={{ fontSize: '16px', fontWeight: '500' }}>Total Applicants</Box>
                <Stack gap={'10px'} flexDirection={'row'} alignItems={'center'}>
                    <TextInput id={"Search Applicants"} label={"Search Applicants"} />
                    <Btn>Filter</Btn>
                </Stack>
            </Stack>
                <TableOfApplication rows={rows} headers={headers} statusCheck={[2]} /> </> : <></>
            }
        </>
    )
}
