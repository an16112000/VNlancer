import { Box, Container } from "@mui/material"
import Header from "./header"
import React from "react"

interface Props {
    children: any
}

function DefaultLayout({ children }: Props) {
    return (
        <Container maxWidth='xl'>
            <Header />
            <Box>
                {children}
            </Box>
        </Container>
    )
}

export default DefaultLayout