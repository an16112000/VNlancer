import { Box, Button } from "@mui/material";
import Options from "../options";
import AddApplication from "./addApplication";
import TableTaskForClient from "./tableTaskForClient";

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
    id: number
) {
    return { logo, item2, item3, item4, id };
}

const rows = [
    createData(<i className="fa-solid fa-building"></i>, 'Jake Gil', '0.0', 'Pending', 1),
];

const headers = ['#', 'Full Name', 'Task', 'Status']

function TaskStatus() {
    return (
        <>
            <AddApplication />
            <Options options={optionsClientApplicants} activeOption={optionsClientApplicants[1].title} />
            <Box sx={{ fontSize: '16px', fontWeight: '500', marginTop: '25px' }}>Task Manager</Box>
            <TableTaskForClient rows={rows} headers={headers} statusCheck={[2]} />
            <Button sx={{
                width: '100%',
                padding: '8px 8px',
                fontSize: '16px',
                color: '#fff',
                bgcolor: 'primary.main',
                '&:hover': {
                    bgcolor: 'primary.main',
                    opacity: 0.6
                }
            }} >Submit</Button>
        </>
    )
}

export default TaskStatus