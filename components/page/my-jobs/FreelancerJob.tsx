import StatusCheck from "@/components/statusCheck"
import { TableRow, TableCell, Stack } from "@mui/material"
import { useRouter } from "next/router"

export const enum JobStatus {
    applied = 'applied',
    accepted = 'accepted',
    doing = 'doing',
    done = 'done',
    close = 'close'
}

interface Props {
    id: number,
    name: string,
    status: JobStatus,
    applyDate: string
}
export default function FreelancerJob(props: Props) {
    const router = useRouter()
    return (
        <TableRow
            onClick={() => router.push(`/jobs/${props.id}`)}
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
            <TableCell sx={{ color: 'text.third' }} align="left">{props.applyDate}</TableCell>
        </TableRow>
    )
}