import MyOpenJobsComponent from "@/components/page/my-open-jobs/MyOpenJobs";
import { PageLayout } from "@/layout/PageLayout";
import { Tab, Tabs } from "@mui/material";
import { useState } from "react";

enum Content {
    Open
}

export default function MyOpenJobs() {
    const [content, setContent] = useState<Content>(Content.Open)
    return(
        <PageLayout>
            <Tabs value={content} onChange={(event: any, value) => setContent(value)} sx={{ borderRadius: '8px', }}>
                <Tab label="List Open" value={Content.Open} />
            </Tabs>
            <MyOpenJobsComponent />
        </PageLayout>
    )
}