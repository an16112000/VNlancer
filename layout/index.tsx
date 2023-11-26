import { Box, Container } from "@mui/material"
import Header from "./header"
import React from "react"

interface Props {
    children: any
}

function DefaultLayout({ children }: Props) {
    return (
        <>
            <Header />
            <Container maxWidth='xl'>
                <Box>
                    {children}
                </Box>
            </Container>
        </>
    )
}

export default DefaultLayout