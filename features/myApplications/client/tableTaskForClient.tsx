import StatusCheck from "@/components/statusCheck";
import { Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import Status from "./status";

interface TableTaskForClientProps {
    rows: any[],
    headers: any[],
    statusCheck?: any[]
}

function TableTaskForClient({ rows, headers, statusCheck }: TableTaskForClientProps) {

    return (
        <>
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
                        {rows.map((row, index) => {
                            console.log(row)
                            return <TableRow
                                // onClick={() => handleClick(row)}
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
                                {/* <TableCell sx={{ color: 'text.third' }} align="left">{row.item4}</TableCell> */}
                                <TableCell sx={{ color: 'text.third' }} align="left">
                                    <StatusCheck>
                                        {/* {row.item4} */}
                                        <Status value={row.item4} />
                                    </StatusCheck>
                                </TableCell>
                            </TableRow>
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

export default TableTaskForClient