import ClientProfileContent from "@/features/settings/client-profile-content";
import FreelancerProfileContent from "@/features/settings/freelancer-profile-content";
import OptionsPage from "@/features/settings/optionsPage";
import { PageLayout } from "@/layout/PageLayout";
import { Box, Tab, Tabs } from "@mui/material";
import { useState } from "react";

enum Content {
    FreelancerProfile,
    ClientProfile,
    // review
}

export default function ClientProfile() {
    const [content, setContent] = useState<Content>(Content.FreelancerProfile)

    return (
        <PageLayout>
            {/* <Box flex={1} padding={'0 20px'}>
                <ClientProfileContent />
            </Box>
            <Box width={'200px'}>
                <OptionsPage />
            </Box> */}
            <Tabs value={content} onChange={(event: any, value) => setContent(value)} sx={{ borderRadius: '8px' }}>
                    <Tab label="Freelancer Profile" value={Content.FreelancerProfile} />
                    <Tab label="Client Profile" value={Content.ClientProfile} />
                    {/* <Tab label="Review" value={Content.review} /> */}
                </Tabs>
                {content == Content.FreelancerProfile ? <FreelancerProfileContent /> :
                   <ClientProfileContent />
                }

        </PageLayout>
    )
}

ClientProfile.requireLogin = true
