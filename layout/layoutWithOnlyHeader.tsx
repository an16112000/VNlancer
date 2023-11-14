import { Box, Container, SxProps } from "@mui/material"
import Header from "./header"

interface Props {
    children: any
}

function LayOutWithOnlyHeader({ children }: Props) {
    return (
        <Container maxWidth='xl'>
            <Header />
            <Box>
                {children}
            </Box>
        </Container>
    )
}

export default LayOutWithOnlyHeader