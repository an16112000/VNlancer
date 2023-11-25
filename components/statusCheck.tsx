import { Box } from "@mui/material"

interface StatusCheckProps {
    children: string
}

function StatusCheck({children}: StatusCheckProps) {
    let color
    if(children == 'Applied') {
        color = '#cb4606'
    } 
    else if(children == 'Accepted') {
        color = '#FFB836'
    }
    else if(children == 'Schedule' || children == 'Live' || children == 'Done') {
        color = '#56CDAD'
    }
    else if(children == 'Paid') {
        color = 'blue'
    } else if(children == 'See Application' || children == 'During') {
        color = '#4640DE'
    }
    else if(children == 'In Review') {
        color = '#FFB836'
    }
    else if(children == 'Closed') {
        color = '#FF6550'
    }
    else {
        color = '#fff'
    }
    return (
        <Box sx={{
            borderRadius: '10px',
            border: `1px solid #ccc`,
            color: `#fff`,
            backgroundColor: `${color}`,
            padding: '5px 0px',
            textAlign: 'center',
            cursor: 'pointer'
        }}>
            {children}
        </Box>
    )
}

export default StatusCheck