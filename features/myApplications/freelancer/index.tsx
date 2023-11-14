import { Box, Stack } from "@mui/material";
import Options from "../options";
import Btn from "@/components/button";
import TableOfApplication from "../table";
import { JobStatus } from "@/components/page/dashboard/JobStatusLabel";

function createData(
    logo: any,
    item2: string,
    item3: string,
    item4: string,
    item5: string,

) {
    return { logo, item2, item3, item4, item5 };
}

const rows = [
    createData(<i className="fa-solid fa-building"></i>, 'Nomad', 'Social Media Assistant', '24 July 2021', JobStatus.accepted),
    createData(<i className="fa-solid fa-building"></i>, 'Udacity', 'Social Media Assistant', '24 July 2021', JobStatus.apply),
    createData(<i className="fa-solid fa-building"></i>, 'Packer', 'Social Media Assistant', '24 July 2021', JobStatus.close),
    createData(<i className="fa-solid fa-building"></i>, 'Nomad', 'Social Media Assistant', '24 July 2021', JobStatus.doing),
    createData(<i className="fa-solid fa-building"></i>, 'Nomad', 'Social Media Assistant', '24 July 2021', JobStatus.done),
    createData(<i className="fa-solid fa-building"></i>, 'Nomad', 'Social Media Assistant', '24 July 2021', JobStatus.done),
    createData(<i className="fa-solid fa-building"></i>, 'Nomad', 'Social Media Assistant', '24 July 2021', JobStatus.done),
];

const headers = ['#', 'Job Name', 'Role', 'Date Applied', 'Status']

export function FreelancerApplications() {
    return (
        <>
            <Stack paddingY='10px' flexDirection={'row'} justifyContent='space-between'>
                <Box sx={{ fontSize: '16px', fontWeight: '500' }}>Applications History</Box>
                <Stack gap={'10px'} flexDirection='row' alignItems='center'>
                    <Btn>Search</Btn>
                    <Btn>Filter</Btn>
                </Stack>
            </Stack>
            <TableOfApplication rows={rows} headers={headers} />
        </>
    )
}
