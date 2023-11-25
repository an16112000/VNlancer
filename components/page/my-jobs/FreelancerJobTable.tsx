import JobStatusLabel, { JobStatus } from "@/components/page/dashboard/JobStatusLabel";
import { Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from "@mui/material";
import { useRouter } from "next/router";

const headers = ['#', 'Job Name', 'Date Applied', 'Status']

export interface Task {
    id: number,
    name: string,
    applyDate: string,
    status: JobStatus,
}

const rows: Task[] = [
    {
        id: 1,
        name: 'Nomad',
        applyDate: '24 July 2021',
        status: JobStatus.accepted
    },
    {
        id: 1,
        name: 'Nomad',
        applyDate: '24 July 2021',
        status: JobStatus.done
    },
    {
        id: 1,
        name: 'Nomad',
        applyDate: '24 July 2021',
        status: JobStatus.doing
    },
    {
        id: 1,
        name: 'Nomad',
        applyDate: '24 July 2021',
        status: JobStatus.inReview
    },
    {
        id: 1,
        name: 'Nomad',
        applyDate: '24 July 2021',
        status: JobStatus.close
    },
    {
        id: 1,
        name: 'Nomad',
        applyDate: '24 July 2021',
        status: JobStatus.applied
    }
];

interface FreelancerJobTableProps {
    filter: string[]
}

function FreelancerJobTable(props: FreelancerJobTableProps) {
    const router = useRouter()
    function handleClick(task: Task) {
        router.push(`/freelancer/job/${task.id}`)
    }
    return (
        <TableContainer component={Paper} sx={{ color: 'text.third' }}>
            <Table sx={{ minWidth: 650, color: 'text.third' }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        {
                            headers.map(
                                (item, index) => <TableCell key={index} align="center">{item}</TableCell>
                            )
                        }
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row, index) => {
                        if(props.filter.includes(row.status))
                        return <TableRow
                            onClick={() => handleClick(row)}
                            key={row.name}
                        >
                            <TableCell align='center' sx={{ color: 'text.third' }} >
                                {index}
                            </TableCell>
                            <TableCell sx={{ color: 'text.third' }} align='center'>
                                <Stack flexDirection='row' justifyContent='center' gap={'10px'}>
                                    <i className="fa-solid fa-building"></i>
                                    {row.name}
                                </Stack>
                            </TableCell>
                            <TableCell sx={{ color: 'text.third' }} align='center'>{row.applyDate}</TableCell>
                            <TableCell sx={{ color: 'text.third' }} align='center'>
                                <JobStatusLabel jobStatus={row.status} />
                            </TableCell>
                        </TableRow>
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default FreelancerJobTable