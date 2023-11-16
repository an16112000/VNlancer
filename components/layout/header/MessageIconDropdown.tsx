import { Box } from "@mui/material"
import Link from "next/link"

function MessageIconDropdown() {
    return(
        <Box sx={{backgroundColor: '#fff', padding: '6px 6px 25px 6px' ,borderRadius: '6px', position:'relative'}}>
            This is MessageIconDropdown
            <Link style={{ position: 'absolute', bottom: '2px', right: '0px', color: 'blue', fontSize: '14px', textDecoration: 'underline' }} href={"/chat"}>Go to message</Link>
        </Box>
    )
}

export default MessageIconDropdown