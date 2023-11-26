import JobsManagementComponent from "@/components/page/management/jobs-management";
import UsersManagementComponent from "@/components/page/management/users-management";
import { PageLayout } from "@/layout/PageLayout";
import { PageLayoutForAdmin } from "@/layout/PageLayoutForAdmin";
import { Box, Tab, Tabs } from "@mui/material";
import { useState } from "react";

enum Content {
    UserManagement,
    JobsManagement,
}

export default function Management() {
    const [content, setContent] = useState<Content>(Content.UserManagement)

    return(
        <PageLayoutForAdmin>
            <Tabs value={content} onChange={(event: any, value) => setContent(value)} sx={{ borderRadius: '8px', }}>
                <Tab sx={{flex: 1}} label="User Management" value={Content.UserManagement} />
                <Tab sx={{flex: 1}} label="Jobs Management" value={Content.JobsManagement} />
            </Tabs>
            <Box>
                {content == Content.UserManagement ? <UsersManagementComponent /> : <JobsManagementComponent />
                }
            </Box>
        </PageLayoutForAdmin>
    )
}
