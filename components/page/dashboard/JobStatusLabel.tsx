import { Box } from "@mui/material"

export const enum JobStatus {
    applied = 'APPLIED',
    accepted = 'ACCEPTED',
    doing = 'DOING',
    done = 'DONE',
    inReview = 'IN REVIEW',
    close = 'CLOSE',
    open = 'OPEN'
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
        case JobStatus.applied:
            return "#00ff80"
        case JobStatus.accepted:
            return "#91433e";
        case JobStatus.doing:
            return "#0066ff"
        case JobStatus.done:
            return "#666699"
        case JobStatus.close:
            return "#ff0000"
        case JobStatus.open:
            return "#027fff";
        default:
            return "#ff0000"
    }
}
