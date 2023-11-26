import ListSavedJobs from "@/components/page/my-jobs/ListSavedJobs";
import { PageLayout } from "@/layout/PageLayout";
import { Tab, Tabs } from "@mui/material";

export default function MySavedJobs() {
    return (
        <PageLayout>
            <Tabs value={'List Saved Jobs'} >
                <Tab label="List Saved Jobs" value={'List Saved Jobs'} />
            </Tabs>
            <ListSavedJobs />
        </PageLayout>
    )
}