import FreelancerProfileContent from "@/features/settings/freelancer-profile-content";
import OptionsPage from "@/features/settings/optionsPage";
import { PageLayout } from "@/layout/PageLayout";
import { Box } from "@mui/material";

export default function FreelancerProfile() {
    return (
        <PageLayout>
            <Box flex={1} padding={'0 20px'}>
                <FreelancerProfileContent />
            </Box>
            <Box width={'200px'}>

                <OptionsPage />
            </Box>
        </PageLayout>
    )
}

FreelancerProfile.requireLogin = true
