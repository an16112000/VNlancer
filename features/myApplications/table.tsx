import JobStatusLabel from "@/components/page/dashboard/JobStatusLabel";
import { Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { useRouter } from "next/router";


interface TableOfApplicationProps {
    rows: any[],
    headers: any[],
    statusCheck?: any[]
}

function TableOfApplication({ rows, headers }: TableOfApplicationProps) {
    const router = useRouter()
    function handleClick(row: any) {
        const idFreelancer = row.id
        router.push(`/client/my-applications/${router.query.idJob}/${idFreelancer}`)
    }
    return (
        <TableContainer component={Paper} sx={{ color: 'text.third' }}>
            <Table sx={{ minWidth: 650, color: 'text.third' }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        {
                            headers.map(
                                (item, index) => <TableCell key={index} sx={{ color: 'text.third' }}>{item}</TableCell>
                            )
                        }
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row, index) => {
                        return <TableRow
                            onClick={() => handleClick(row)}
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell sx={{ color: 'text.third' }} component="th" scope="row">
                                {index}
                            </TableCell>
                            <TableCell sx={{ color: 'text.third' }} component="th" scope="row">
                                <Stack flexDirection={'row'} alignItems={'center'} gap={'10px'}>
                                    {row.logo}
                                    {row.item2}
                                </Stack>
                            </TableCell>
                            <TableCell sx={{ color: 'text.third' }} align="left">{row.item3}</TableCell>
                            <TableCell sx={{ color: 'text.third' }} align="left">{row.item4}</TableCell>
                            <TableCell sx={{ color: 'text.third' }} align="left">
                                <JobStatusLabel jobStatus={row.item5} />
                            </TableCell>
                        </TableRow>
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default TableOfApplication