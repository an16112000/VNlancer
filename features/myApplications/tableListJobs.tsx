import StatusCheck from "@/components/statusCheck";
import { Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { useRouter } from "next/router";


interface TableOfApplicationProps {
    rows: any[],
    headers: any[],
    statusCheck?: any[]
}

function TableOfListJobs({ rows, headers, statusCheck }: TableOfApplicationProps) {
    const router = useRouter()
    return (
        <TableContainer component={Paper} sx={{ color: 'text.third', marginTop: '20px' }}>
            <Table sx={{ minWidth: 650, color: 'text.third' }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        {
                            headers.map(
                                (item, index) => <TableCell key={index} sx={{ color: 'text.third' }}>{item}</TableCell>
                            )
                        }
                        {/* <TableCell sx={{ color: 'text.third' }}>#</TableCell>
                        <TableCell sx={{ color: 'text.third' }}>Company Name</TableCell>
                        <TableCell sx={{ color: 'text.third' }} align="left">Roles</TableCell>
                        <TableCell sx={{ color: 'text.third' }} align="left">Date Applied</TableCell>
                        <TableCell sx={{ color: 'text.third' }} align="left">Status</TableCell> */}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row, index) => (
                        <TableRow
                            onClick={() => router.push(`/client/my-applications/${row.id}/my-applicants`)}
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell sx={{ color: 'text.third' }} component="th" scope="row">
                                {index}
                            </TableCell>
                            <TableCell sx={{ color: 'text.third' }} component="th" scope="row">
                                <Stack flexDirection={'row'} alignItems={'center'} gap={'10px'}>
                                    {row.item2}
                                </Stack>
                            </TableCell>
                            <TableCell sx={{ color: 'text.third' }} align="left">
                                <StatusCheck>
                                    {row.item3}
                                </StatusCheck>
                            </TableCell>
                            <TableCell sx={{ color: 'text.third' }} align="left">{row.item4}</TableCell>
                            <TableCell sx={{ color: 'text.third' }} align="left">{row.item5}</TableCell>
                            <TableCell sx={{ color: 'text.third' }} align="left">{row.item6}</TableCell>
                            <TableCell sx={{ color: 'text.third' }} align="left">{row.item7}</TableCell>

                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default TableOfListJobs