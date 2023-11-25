import DuringJobComponent from "@/components/page/my-jobs/DuringJob"
import FinishedJobComponent from "@/components/page/my-jobs/FinishedJob"
import PendingJobComponent from "@/components/page/my-jobs/PendingJob"
import { PageLayout } from "@/layout/PageLayout"
import { RootState } from "@/state/store"
import { Box, Tab, Tabs } from "@mui/material"
import { useState } from "react"
import { useSelector } from "react-redux"

enum Content {
    Pending,
    During,
    Finished
}

export default function MyJobs() {
    useSelector((state: RootState) => state.user)
    const [content, setContent] = useState<Content>(Content.Pending)
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <PageLayout>
            <Tabs value={content} onChange={(event: any, value) => setContent(value)} sx={{ borderRadius: '8px', }}>
                <Tab label="Pending" value={Content.Pending} />
                <Tab label="During" value={Content.During} />
                <Tab label="Finished" value={Content.Finished} />
            </Tabs>
            <Box>
                {content == Content.Pending ? <PendingJobComponent /> :
                    content == Content.During ? <DuringJobComponent /> : <FinishedJobComponent />
                }
            </Box>
        </PageLayout>
    )
}