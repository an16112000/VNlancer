import DuringJobComponent from "@/components/page/my-jobs/DuringJob"
import FinishedJobComponent from "@/components/page/my-jobs/FinishedJob"
import PendingJobComponent from "@/components/page/my-jobs/PendingJob"
import { PageLayout } from "@/layout/PageLayout"
import { RootState } from "@/state/store"
import { Box, Tab, Tabs } from "@mui/material"
import { useState } from "react"
import { useSelector } from "react-redux"

enum Content {
    During,
    Finished,
}

export default function MyJobs() {
    useSelector((state: RootState) => state.user)
    const [content, setContent] = useState<Content>(Content.During)
    const [open, setOpen] = useState(false);
    return (
        <PageLayout>
            <Tabs value={content} onChange={(event: any, value) => setContent(value)} sx={{ borderRadius: '8px', }}>
                <Tab label="During" value={Content.During} />
                <Tab label="Finished" value={Content.Finished} />
            </Tabs>
            <Box>
                {
                    content == Content.During ? <DuringJobComponent /> : <FinishedJobComponent />
                }
            </Box>
        </PageLayout>
    )
}