import { Box, Container } from "@mui/material"
import Header from "./header"

interface LayOutWithOnlyHeaderProps {
    children: any
}

function LayOutWithOnlyHeader({children}: LayOutWithOnlyHeaderProps) {
    return (
        <>
            <Container maxWidth='lg'>
                <Header />
                <Box marginTop={'120px'}>
                    {children}
                </Box>
            </Container>
        </>
    )
}

export default LayOutWithOnlyHeader