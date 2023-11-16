import StatusCheck from "@/components/statusCheck";
import { Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { useRouter } from "next/router";

const headers = ['#', 'Name', 'Status', 'Date Posted', 'Due Date', 'Applicants', 'Employee Type']


export interface ClientJob {
    id: number,
    name: string,
    status: string,
    postDate: string,
    dueDate: string,
    applicants: number,
    employeeType: string,
}

const rows: ClientJob[] = [
    {
        id: 1,
        name: 'Social Media Assistant',
        status: 'Live',
        postDate: '20 May 2020',
        dueDate: '24 July 2021',
        applicants: 3,
        employeeType: 'remote',
    },
    {
        id: 1,
        name: 'Social Media Assistant',
        status: 'Live',
        postDate: '20 May 2020',
        dueDate: '24 July 2021',
        applicants: 3,
        employeeType: 'remote',
    },
    {
        id: 1,
        name: 'Social Media Assistant',
        status: 'Live',
        postDate: '20 May 2020',
        dueDate: '24 July 2021',
        applicants: 3,
        employeeType: 'part-time',
    },
    {
        id: 1,
        name: 'Social Media Assistant',
        status: 'Live',
        postDate: '20 May 2020',
        dueDate: '24 July 2021',
        applicants: 3,
        employeeType: 'full-time',
    },
    {
        id: 1,
        name: 'Social Media Assistant',
        status: 'Live',
        postDate: '20 May 2020',
        dueDate: '24 July 2021',
        applicants: 3,
        employeeType: 'full-time',
    }
];

function ClientJobTable() {
    const router = useRouter()
    return (
        <TableContainer component={Paper} sx={{ color: 'text.third', marginTop: '20px' }}>
            <Table sx={{ minWidth: 650, color: 'text.third' }} aria-label="simple table">
                <TableHead>
                    <TableRow >
                        {
                            headers.map(
                                (item, index) => <TableCell key={index} align='center'>{item}</TableCell>
                            )
                        }
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row, index) => (
                        <TableRow
                            onClick={() => router.push(`/client/job/${row.id}`)}
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell sx={{ color: 'text.third' }} align='center'>
                                {index}
                            </TableCell>
                            <TableCell sx={{ color: 'text.third' }} align='center'>
                                <Stack>
                                    {row.name}
                                </Stack>
                            </TableCell>
                            <TableCell sx={{ color: 'text.third' }} align='center'>
                                <StatusCheck>
                                    {row.status}
                                </StatusCheck>
                            </TableCell>
                            <TableCell sx={{ color: 'text.third' }} align='center'>{row.postDate}</TableCell>
                            <TableCell sx={{ color: 'text.third' }} align='center'>{row.dueDate}</TableCell>
                            <TableCell sx={{ color: 'text.third' }} align='center'>{row.applicants}</TableCell>
                            <TableCell sx={{ color: 'text.third' }} align='center'>{row.employeeType}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default ClientJobTable