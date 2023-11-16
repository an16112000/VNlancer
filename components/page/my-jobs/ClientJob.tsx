import StatusCheck from "@/components/statusCheck"
import { TableRow, TableCell, Stack } from "@mui/material"

export const enum JobStatus {
    open = 'open',
    assigned = 'assigned',
    done = 'done',
    close = 'close'
}

interface Props {
    id: number,
    name: string,
    status: JobStatus,
    createAt: string,
    dueDate: string,
    applicant: number,
    need: number
}
export default function ClientJob(props: Props) {
    <TableRow
        key={props.name}
        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
    >
        <TableCell sx={{ color: 'text.third' }} component="th" scope="row">
            {props.id}
        </TableCell>
        <TableCell sx={{ color: 'text.third' }} component="th" scope="row">
            <Stack flexDirection={'row'} alignItems={'center'} gap={'10px'}>
                {props.name}
            </Stack>
        </TableCell>
        <TableCell sx={{ color: 'text.third' }} align="left">
            <StatusCheck>
                {props.status}
            </StatusCheck>
        </TableCell>
        <TableCell sx={{ color: 'text.third' }} align="left">{props.createAt}</TableCell>
        <TableCell sx={{ color: 'text.third' }} align="left">{props.dueDate}</TableCell>
        <TableCell sx={{ color: 'text.third' }} align="left">{props.applicant}</TableCell>
        <TableCell sx={{ color: 'text.third' }} align="left">{props.need}</TableCell>
    </TableRow>
}