import { Box } from "@mui/material"

export const enum JobStatus {
    apply = 'apply',
    accepted = 'accepted',
    doing = 'doing',
    done = 'done',
    close = 'close'
}

interface Props {
    jobStatus: JobStatus
}

export default function JobStatusLabel(props: Props) {
    return (
        <Box sx={{
            borderRadius: '10px',
            border: `1px solid ${getLabelColor(props.jobStatus)}`,
            color: `${getLabelColor(props.jobStatus)}`,
            padding: '5px 0px',
            textAlign: 'center',
            cursor: 'pointer'
        }}>
            {props.jobStatus}
        </Box>
    )
}

function getLabelColor(jobStatus: JobStatus) {
    switch (jobStatus) {
        case JobStatus.apply:
            return "#00ff80"
        case JobStatus.accepted:
            return "#ffff66"
        case JobStatus.doing:
            return "#0066ff"
        case JobStatus.done:
            return "#666699"
        case JobStatus.close:
            return "#ff0000"
        default:
            return "#ff0000"
    }
}
