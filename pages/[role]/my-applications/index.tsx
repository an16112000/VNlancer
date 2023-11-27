import PendingJobComponent from "@/components/page/my-jobs/PendingJob";
import { PageLayout } from "@/layout/PageLayout";
import { Tab, Tabs } from "@mui/material";

export default function MyApplications() {
    return (
        <PageLayout>
            <Tabs value={'Applied'} >
                <Tab label="Applied" value={'Applied'} />
            </Tabs>
            <PendingJobComponent />
        </PageLayout>
    )
}